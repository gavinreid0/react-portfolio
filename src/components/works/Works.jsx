import { useState } from "react";
import "./works.css";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/color-palette.png",
      title: "Palette Cleanser",
      desc: "A palette cleanser app created in order to fulfill a need for various font colors and font types in projects. The user can create an account, log into the web app, select the font types and font colors they want for the header, body, and footer of their webpage. ",
      img: "https://raw.githubusercontent.com/gavinreid0/Palette-Cleanser/main/public/img/SCREENSHOT-FOR-PALLETE.png",
      href: "https://github.com/gavinreid0/Palette-Cleanser",
      href2:"https://palette-cleanser.herokuapp.com/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Explore Mars",
      desc: "Educational web application utilizing NASA Open APIs to display mars rover images, as well as the NASA astronomy photo of the day. Made using: -HTML -CSS - materialize -Javascript - JQuery - moment.js",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      href: "https://github.com/gavinreid0/ExploreMars",
      href2:"https://jamesj995.github.io/ExploreMars/",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Note Taker",
      desc: "",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      href: "https://github.com/gavinreid0/noteTaker",
      href2:"https://note-taker-gr.herokuapp.com/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="worksContainer">
            <div className="worksItem">
              <div className="worksLeft">
                <div className="leftContainer">
                  <div className="worksImgContainer">
                    <img className="worksImg" src={d.icon} alt="" />
                  </div>
                  <h2 className="worksH2">{d.title}</h2>
                  <p className="pWorks">{d.desc}</p>
                  <a href={d.href} className="worksSpan">
                    Click Here for Github Repository:
                  </a>
                  <a href={d.href2} className="worksSpan">
                    Link to Deployed Application:
                  </a>
                </div>
              </div>
              <div className="worksRight">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow arrowLeft"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow arrowRight"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
