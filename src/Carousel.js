import React, { useState } from "react";
import "./App.css";

function Carousel(props) {
  let picture = props.value;
  const handleLeftClick = props.handleLeftClick;
  const handleRightClick = props.handleRightClick

  console.log("Picture", picture);
  if (picture !== "The photo is not available") {
    console.log(picture);
  }

  return (
    <div className="CarouselBackgroundDiv">
      <div className="Button left" onClick={()=> handleLeftClick()}>x</div>

      <div className="LargeImage">
          {(picture !=="The photo is not available" && <img src={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} />)}
      </div>

      <div className="Button right" onClick={()=> handleRightClick()} >x</div>
    </div>
  );
}

export default Carousel;
