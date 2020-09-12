import React, { useEffect, useState } from "react";

function CatData() {
  const [state, setState] = useState([]);
  
  React.useEffect(() => {
    
    fetch("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=04798704e9e3c86362c64d3fe2f5eedc&gallery_id=58061135-72157626529791195&format=json&nojsoncallback=1")
    .then(response => response.json())
    .then(data => setState(data.photos.photo));
    
    },[])

    let photoArray;
    if(state.length>0){
    const photoArray = state;
    console.log("photoArr", photoArray);
    console.log(photoArray[0]) 
    
    }

  return ""
}


export default CatData