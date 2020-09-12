import React from 'react';
import logo from './logo.svg';
import './App.css';
import './catData';
import CatData from './catData';
import Filmstrip from './Filmstrip';


function App(props) {
  const {state, setstate, photoArray} = props;
  console.log("state", state);

  return (
    <div>
      <div className="Background">
        <CatData />
        
        <div className="SearchDiv">
        </div>
      </div>
     <Filmstrip />
      
    </div>
  );
}




export default App;
