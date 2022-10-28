import { useState, useRef } from "react";
const VIDEO_SRC =
  "//images-assets.nasa.gov/video/One Small Step/One Small Step~orig.mp4";
function VideoPlayer() {
  const [isPlaying, setPlaying] = useState(false);
  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);
  const onClickPlay = () => video.current.play();
  const onClickPause = () => video.current.pause();
  const video = useRef();
  return (
    <section>
      <video
        ref={video}
        src={VIDEO_SRC}
        controls
        width="480"
        onPlay={onPlay}
        onPause={onPause}
      />
      <button onClick={isPlaying ? onClickPause : onClickPlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </section>
  );
}

function App() {
  return <VideoPlayer />;
}

export default App;
