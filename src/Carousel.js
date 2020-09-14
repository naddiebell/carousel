import React, { useState } from "react";
import "./App.css";

function Carousel(props) {
    const [displayCarousel, setDisplayCarousel] = useState(false);

  let picture = props.value;
  const handleLeftClick = props.handleLeftClick;
  const handleRightClick = props.handleRightClick;



  if (picture !== "The photo is not available") {
  }

  return (
      <div>
      {displayCarousel && (
    <div className="CarouselBackgroundDiv">
      <div className="Button left" onClick={() => handleLeftClick()}>
        x
      </div>

      <div className="LargeImage">
        {picture !== "The photo is not available" && (
          <img
            src={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
          />
        )}
      </div>

      <div className="Button right" onClick={() => handleRightClick()}>
        x
      </div>
    </div>
      )}
    </div>
  );
}

export default Carousel;
