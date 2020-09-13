import React, { useState } from "react";
import "./App.css";

function Carousel(props) {
  let picture = props.value;

  console.log("Picture", picture);
  if (picture !== "The photo is not available") {
    console.log(picture);
  }

  return (
    <div className="CarouselBackgroundDiv">
      <div className="Button left">x</div>

      <div className="LargeImage">
          {(picture !=="The photo is not available" && <img src={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} />)}
      </div>

      <div className="Button right">x</div>
    </div>
  );
}

export default Carousel;
