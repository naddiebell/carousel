import React, { useState } from "react";
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
      setDisplayLoader(true);
      fetch(
        `https://api.unsplash.com/search/photos?query=${param}&client_id=Wot0T-RckMuAxjpXihnU-LIT4VB_5fFbgzbhAA1oLlM&page=1&per_page=8https://api.unsplash.com/search/photos?query=dogs&client_id=Wot0T-RckMuAxjpXihnU-LIT4VB_5fFbgzbhAA1oLlM&page=1&per_page=8`
      )
        .then((response) => response.json())
        .then((data) => data.results)
        .then((resultsArray) => {
          let photos = resultsArray.map((element) => element.urls.regular);
          setphotoArray(photos);
        })
        .then(() => setDisplayLoader(false))
        .then(() => setDisplayLoader(false));
    }
  }

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

  function handleWindow() {
    console.log("hello");
    setDisplayCarousel(false);
    setphotoArray([]);
  }


  return (
    <div className="background">
      <div>
        <Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      </div>
      {displayCarousel && (
      
          <Carousel
            value={Picture()}
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
            photoArr={photoArray}
            setCurrentImageIndex={setCurrentImageIndex}
            showCarousel={showCarousel}
            handleWindow = {handleWindow}
          />
       
      )}

      {displayLoader && <Loader />}
      <Filmstrip
        photoArr={photoArray}
        setCurrentImageIndex={setCurrentImageIndex}
        showCarousel={showCarousel}
      />
    </div>
  );
}

export default App;


