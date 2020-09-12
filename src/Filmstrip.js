import React from "react";

const Filmstrip = (props) => {
  return (
    <div className="Filmstrip">
      <div className="Box Box1">
        {" "}
        <img
          src={
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          }
        />
      </div>

      <div className="Box Box2"></div>
      <img />
      <div className="Box Box3"></div>
      <img />
      <div className="Box Box4"></div>
      <img />
    </div>
  );
};

export default Filmstrip;
