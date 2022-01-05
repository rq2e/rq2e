import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  render() {
    return React.createElement(
      'p',
      null,
      React.createElement(
        'a',
        {href: '//reactjs.org'},
        `Read more about ${this.props.framework}`,
      ),
    );
  }
}


const link1 = React.createElement(
  Link,
  { framework: 'React', url: '//reactjs.org' }
);
const link2 = React.createElement(
  Link,
  { framework: 'Vue', url: '//vuejs.org' }
);
const link3 = React.createElement(
  Link,
  { framework: 'Angular', url: '//angular.io' }
);

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domElement = document.getElementById('root');
ReactDOM.render(group, domElement);
