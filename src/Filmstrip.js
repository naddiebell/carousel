/* eslint-disable no-sequences */
import React from "react";

const Filmstrip = (props) => {
  let photoArray = props.photoArr;
  let setCurrentImageIndex = props.setCurrentImageIndex;
  let showCarousel = props.showCarousel;



  return (
    <div className="filmBackground">
      <div className="Filmstrip">
        {photoArray.map((element, index) => {
          return (
            <div className="Box" key={index}>
              <img
                src={element}
                alt=""
                onClick={() => (
                  setCurrentImageIndex(index),
                  showCarousel(),
                  showCarousel()
                )}

              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Filmstrip;
