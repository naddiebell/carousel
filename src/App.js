import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Filmstrip from "./Filmstrip";
import Carousel from "./Carousel";
import Search from "./SearchForm";
import Loader from "./loading";


function App() {
  const [photoArray, setphotoArray] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);
  
  

  function handleSearch(param) {
    if (param !== "") {
      setDisplayLoader(true)
      fetch(
        `https://api.unsplash.com/search/photos?query=${param}&client_id=Wot0T-RckMuAxjpXihnU-LIT4VB_5fFbgzbhAA1oLlM&page=1&per_page=8https://api.unsplash.com/search/photos?query=dogs&client_id=Wot0T-RckMuAxjpXihnU-LIT4VB_5fFbgzbhAA1oLlM&page=1&per_page=8`
      )
        .then((response) => response.json())
        .then((data) => (data.results))
        .then((resultsArray)=> {
          let photos = resultsArray.map(element => element.urls.regular)
          setphotoArray(photos) 
        }

        );
  
    }
  }
  /*
 function arrayOfPhotos() {
    if(photoArrayObjects.length >0){
    let photos = photoArrayObjects.map(element => element.urls.regular)
    setphotoArray(photos)
  


 }}
 */
    

console.log("llllll", photoArray)
 

  function showCarousel() {
    setDisplayCarousel(true);
    console.log(displayCarousel);
  }

  const handleKeyDown = (event) => {
    handleSearch(event);
  };

  function handleLeftClick() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  function handleRightClick() {
    if (currentImageIndex + 1 < photoArray.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function Picture() {
    if (photoArray.length === 0) {
      return "The photo is not available";
    } else {
      return photoArray[currentImageIndex];
    }
  }

  return (
    <div>
      <div>
        <Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      </div>
      {displayCarousel && (
        <Carousel
          value={Picture()}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      )}
      {displayLoader && (
        <Loader />
      )}


      <div className="Background">
        <div className="SearchDiv"></div>
      </div>
      <Filmstrip
        photoArr={photoArray}
        value={setCurrentImageIndex}
        showCarousel={showCarousel}
      />
    </div>
  );
}

export default App;


/*
 fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=04798704e9e3c86362c64d3fe2f5eedc&text=${param}&per_page=8&format=json&nojsoncallback=1`
      )
*/