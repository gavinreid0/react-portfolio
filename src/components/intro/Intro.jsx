
import "./intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="introWrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gavin Reid</h1>
          <h3>
            Freelance <span className="introSpan" ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img className="downImg" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
