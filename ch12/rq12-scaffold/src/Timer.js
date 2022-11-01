function Timer() {
  return (
    <section className="timer">
      <ul className="parts">
        <li className="part">
          <p className="number">05</p>
          <p className="unit">minutes</p>
        </li>
        <li className="colon">:</li>
        <li className="part">
          <p className="number">00</p>
          <p className="unit">seconds</p>
        </li>
      </ul>
      <button title="Play" className="toggle">
        <img src="icons/play.svg" alt="Play" />
      </button>
    </section>
  );
}

export default Timer;
