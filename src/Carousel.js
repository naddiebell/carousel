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
  const handleWindow = props.handleWindow

  

  if (picture !== "The photo is not available") {
  }

  return (
      <div>
      
    <div className="CarouselBackgroundDiv">
    <div 
      className="exitButton"
      onClick={() => handleWindow()}
      >
      x
    </div>
      <div className="LargeImage">
        {picture !== "The photo is not available" && (
          <img
            className="photo"
            src={picture}
          />
        )}
      </div>
      <div className="Gallery">

      <div className="Buttonleft" onClick={() => handleLeftClick() }>
      {"<"}
        
      </div>
      <div>
          <Filmstrip 
            photoArr={photoArray}
        setCurrentImageIndex={setCurrentImageIndex}
        showCarousel={showCarousel}
          />
     </div>
     <div className="Buttonright" onClick={() => handleRightClick()}>
        {">"}
      </div>
          

      </div>



     

      

      
     
    </div>
      
    </div>
  );
}

export default Carousel;
