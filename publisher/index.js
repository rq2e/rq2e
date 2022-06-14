const glob = require('glob');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const cp = require('child_process');

const projectsFolder = path.join(process.cwd(), '_projects');
if (fs.existsSync(projectsFolder)) {
  fs.rmSync(projectsFolder,  { recursive: true, force: true });
}
fs.mkdirSync(projectsFolder, 0744);

function generatePackage(packageJson) {
  const content = JSON.parse(packageJson);
  const rawName = content.name;
  const chapterId = rawName.slice(2,4);
  content.name = `cra-template-${rawName}`;
  delete content.private;
  content.files = ["template", "template.json"];
  content.repository = {
    type: "git",
    url: "https://github.com/rq2e/rq2e/",
    directory: `ch${chapterId}/${rawName}`,
  };
  content.bugs = { url: "https://github.com/rq2e/rq2e/issues" };
  content.scripts["clean-files"] = "rm -rf ./template/public ./template/src",
  content.scripts["copy-files"] = "cp -a ./src/. template/src && cp -a ./public/. template/public",
  content.scripts["prepublishOnly"] = "yarn clean-files && yarn copy-files"
  return JSON.stringify(content, null, 2);
}

function generateTemplate(packageJson) {
  const { scripts, dependencies } = JSON.parse(packageJson);
  delete dependencies['react'];
  delete dependencies['react-dom'];
  delete dependencies['react-scripts'];
  return JSON.stringify({ package: { scripts, dependencies } }, null, 2);
}

const filesToCopy = [
  { source: '/public', destination: ['/public', '/template/public'] },
  { source: '/src', destination: ['/src', '/template/src'] },
  { source: '/README.md', destination: ['/README.md'] },
  { source: '/config*', destination: ['/template/<basename>'] },
  { source: '/yarn.lock', destination: ['/yarn.lock'] },
  { source: '/package-lock.json', destination: ['/package-lock.json'] },
  { source: '/.gitignore', destination: ['/.gitignore', '/template/gitignore'] }, // Not a typo - no dot required
  { source: '/.*', destination: ['/<basename>'] },
  { source: '/package.json', converter: generatePackage, destination: ['/package.json'] },
  { source: '/package.json', converter: generateTemplate, destination: ['/template.json'] },
];

function publish(sourceFolder, index) {
  const progress = `[${index+1}/${projects.length}]`;

  const projectName = path.basename(sourceFolder);

  const projectChapterId = Number(projectName.match(/^rq(\d+)/)[1]);
  const folderChapterId = Number(sourceFolder.match(/ch(\d+)/)[1]);
  if (projectChapterId !== folderChapterId) {
    // This one should be unpublished because chapter number has changed
    try {
      cp.execSync(`npm unpublish cra-template-${projectName} -f`);
      console.log(`Successfully unpublished "${projectName}" ${progress}`);
    } catch(e) {
      console.error(`Skipped unpublishing "${projectName}" ${progress}`);
    }
  }

  const projectFolder = path.join(projectsFolder, projectName);
  const templateFolder = path.join(projectFolder, 'template');
  fs.mkdirSync(projectFolder, 0744);
  fs.mkdirSync(templateFolder, 0744);

  // Copy files and folder according to the map above
  filesToCopy.forEach(({ source, destination, converter }) => {
    glob.sync(path.join(sourceFolder, source)).forEach(sourcePath =>
      destination.forEach(destinationName => {
        const destinationPath = path.join(projectFolder, destinationName.replace('<basename>', path.basename(sourcePath)));
        if (!converter) {
          fse.copySync(sourcePath, destinationPath);
        } else {
          const convertedContent = converter(fs.readFileSync(sourcePath));
          fs.writeFileSync(destinationPath, convertedContent);
        }
      })
    );
  });

  // Then publish
  try {
    cp.execSync('npm publish 2>&1', { cwd: projectFolder});
    console.log(`Successfully published "${projectName}" ${progress}`);
  } catch(e) {
    console.error(`Skipped publishing "${projectName}" ${progress}`);
  }

}

const projects = glob.sync('../ch*/rq*');
projects.forEach(publish);