import React from "react";
import "./App.css";
import "./carousel.css"
import Filmstrip from "./Filmstrip";
import MiniFilmstrip from "./MiniFilmstrip"
import { FaTimes } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Carousel(props) {
  let picture = props.value;
  const handleLeftClick = props.handleLeftClick;
  const handleRightClick = props.handleRightClick;
  const photoArray = props.photoArr;
  const setCurrentImageIndex = props.setCurrentImageIndex;
  const showCarousel = props.showCarousel;
  const handleWindow = props.handleWindow;

  if (picture !== "The photo is not available") {
  }

  return (
    <div>
      <div className="CarouselBackgroundDiv">
        <div className="exitButton" onClick={() => handleWindow()}>
          <FaTimes className="closeButton" />
        </div>
        <i class="fa fa-window-close" aria-hidden="true"></i>
        <div className="LargeImage">
          {picture !== "The photo is not available" && (
            <img className="photo" src={picture} alt="" />
          )}
        </div>
        <div className="Gallery">
          <div className="Buttonleft" onClick={() => handleLeftClick()}>
            <FaArrowAltCircleLeft />
          </div>
          {/* <div>
            <Filmstrip
              className="miniFilmstrip"
              photoArr={photoArray}
              setCurrentImageIndex={setCurrentImageIndex}
              showCarousel={showCarousel}
            />
          </div> */}
           {/* <div className="smallFilmstrip"> */}
              <MiniFilmstrip
              photoArr={photoArray}
              setCurrentImageIndex={setCurrentImageIndex}
              showCarousel={showCarousel}
              
              />
           {/* </div> */}
          <div className="Buttonright" onClick={() => handleRightClick()}>
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
