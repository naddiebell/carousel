import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Filmstrip from './Filmstrip';
import Carousel from './Carousel'
import Search from './SearchForm'

function App() {

  const [photoArray, setphotoArray] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  

    function handleSearch (param) {
      if (param !== ""){
        
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=04798704e9e3c86362c64d3fe2f5eedc&text=${param}&per_page=8&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => setphotoArray(data.photos.photo))

      }
    }

    
      const handleKeyDown = (event) => {
        handleSearch(event)
      }
    


    
   
    
    function Picture () {
      if(photoArray.length === 0){
        return "The photo is not available"
      } else {
        return photoArray[currentImageIndex]
      }
    }

    function handleLeftClick () {
      
      setCurrentImageIndex(currentImageIndex-1)
    }

    function handleRightClick () {
      setCurrentImageIndex(currentImageIndex+1)
    }


  return (
    <div>
      <div>
      <Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      </div>
        <Carousel value={Picture()} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick}/>
      
      <div className="Background">
        
        <div className="SearchDiv">
        </div>
      </div>
     <Filmstrip photoArr={photoArray}/>
     
      
    </div>
  );
}




export default App;
