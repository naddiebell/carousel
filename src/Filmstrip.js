import React from "react";

const Filmstrip = (props) => {
  let photoArray = props.photoArr;
  let setCurrentImageIndex = props.value;
  let showCarousel= props.showCarousel;

 

  return (
    <div className="Filmstrip">
      {photoArray.filter(element => element.server !=="0").map((element, index) => {
          return (
        <div key={index} >
        <div className="Box">
          <img
            src={`https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`}
            onClick={() => (
            setCurrentImageIndex(index),
            showCarousel(),
            showCarousel()
            )}
            
          />
        </div>
        </div>
        )})}
    </div>
  );
};

export default Filmstrip;
