import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Filmstrip from './Filmstrip';
import Carousel from './Carousel'

function App() {

  const [photoArray, setphotoArray] = useState([]);
  
  React.useEffect(() => {
    
    fetch("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=04798704e9e3c86362c64d3fe2f5eedc&gallery_id=58061135-72157626529791195&format=json&nojsoncallback=1")
    .then(response => response.json())
    .then(data => setphotoArray(data.photos.photo));
    
    },[])

  return (
    <div>
      
        <Carousel photoArr={photoArray}/>
      
      <div className="Background">
        
        <div className="SearchDiv">
        </div>
      </div>
     <Filmstrip photoArr={photoArray}/>
      
    </div>
  );
}




export default App;
