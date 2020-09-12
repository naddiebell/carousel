import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Filmstrip from './Filmstrip';


function App() {

  const [state, setState] = useState([]);
  
  React.useEffect(() => {
    
    fetch("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=04798704e9e3c86362c64d3fe2f5eedc&gallery_id=58061135-72157626529791195&format=json&nojsoncallback=1")
    .then(response => response.json())
    .then(data => setState(data.photos.photo));
    
    },[])

  /*const {state, setstate, photoArray} = props;
  console.log("state", state);*/

  return (
    <div>
      <div className="Background">
        
        <div className="SearchDiv">
        </div>
      </div>
     <Filmstrip />
      
    </div>
  );
}




export default App;
