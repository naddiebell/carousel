import React from "react";

const Filmstrip = (props) => {
  let photoArray = props.photoArr;
  let setCurrentImageIndex = props.setCurrentImageIndex;
  let showCarousel= props.showCarousel;

 

  return (
    <div className="filmBackground">
    <div className="Filmstrip">
      {photoArray.map((element, index) => {
          return (
        <div key={index} >
        <div className="Box">
          <img
            src={element}
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
    </div>
  );
};

export default Filmstrip;
