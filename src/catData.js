import React, { useEffect, useState } from "react";

function CatData() {
  const [state, setState] = useState([]);
  
  React.useEffect(() => {
    console.log('hello')
    fetch("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=04798704e9e3c86362c64d3fe2f5eedc&gallery_id=58061135-72157626529791195&format=json&nojsoncallback=1")
    .then(response => response.json())
    .then(data => setState(data.photos.photo));
    
    },[])

    console.log("Im the state", state)

    const photoArray = state;
    console.log("photoArr", photoArray);

  return ""
}


export default CatData