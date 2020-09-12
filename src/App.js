import React from 'react';
import logo from './logo.svg';
import './App.css';
import './catData';
import CatData from './catData';








function App(props) {
  const {state, setstate, photoArray} = props;
  console.log("hello");

  return (
    <div>
      <div className="Background">
        <CatData />
        <div className="SearchDiv">
        </div>
      </div>
      <div className="Filmstrip">
        <div className="Box Box1"> <img src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"} /></div>
         
        <div className="Box Box2"></div>
          <img />
        <div className="Box Box3"></div>
          <img />
        <div className="Box Box4"></div>
          <img />

      </div>
    </div>
  );
}

export default App;
