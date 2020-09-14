import React from "react";

const Filmstrip = (props) => {
  let photoArray = props.photoArr;
  let setCurrentImageIndex = props.value;
  let showCarousel= props.showCarousel;

  return (
    <div className="Filmstrip">
      {photoArray.map((element, index) => (
        <div>
         <div key={index} ></div>
        <div className="Box">
          <img
            src={`https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`}
            onClick={() => setCurrentImageIndex(index)}
            onClick={() => showCarousel()}
          />
        </div>
        </div>
      ))}
    </div>
  );
};

export default Filmstrip;
