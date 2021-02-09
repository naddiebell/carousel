/* eslint-disable no-sequences */
import React from "react";
import "./miniFilmstrip.css"

const MiniFilmstrip = (props) => {
  let photoArray = props.photoArr;
  let setCurrentImageIndex = props.setCurrentImageIndex;
  let showCarousel = props.showCarousel;
  const styles = {
      height: '40px',
      width: '25px',
  };

  return (
    <div className="miniFilmBackground">
      <div className="miniFilmstrip">
        {photoArray.map((element, index) => {
          return (
            <div className="miniBox" key={index}>
              <img
                style={styles}
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

export default MiniFilmstrip;
