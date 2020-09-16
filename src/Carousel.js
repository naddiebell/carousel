import React, { useState } from "react";
import "./App.css";
import Filmstrip from "./Filmstrip"

function Carousel(props) {
    const [displayCarousel, setDisplayCarousel] = useState(false);

  let picture = props.value;
  const handleLeftClick = props.handleLeftClick;
  const handleRightClick = props.handleRightClick;
  const photoArray= props.photoArr;
  const setCurrentImageIndex=props.setCurrentImageIndex;
  const showCarousel= props.showCarousel;

  

  if (picture !== "The photo is not available") {
  }

  return (
      <div>
      
    <div className="CarouselBackgroundDiv">
      <div className="Buttonleft" onClick={() => handleLeftClick() }>
      {"<"}
        
      </div>

      <div className="LargeImage">
        {picture !== "The photo is not available" && (
          <img
            className="photo"
            src={picture}
          />
        )}
      </div>

      <div className="Buttonright" onClick={() => handleRightClick()}>
        {">"}
      </div>
      <div className="Gallery">
          <Filmstrip 
            photoArr={photoArray}
        setCurrentImageIndex={setCurrentImageIndex}
        showCarousel={showCarousel}
          />

          

      </div>
    </div>
      
    </div>
  );
}

export default Carousel;
