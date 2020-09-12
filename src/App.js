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
        <div className="Box Box1"></div>
          <img src="" />
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
