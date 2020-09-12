import React from "react";

const Filmstrip = (props) => {

        let photoArray= props.photoArr
        //console.log(`https://farm${photoArray[0].farm}.staticflickr.com/${photoArray[0].server}/${photoArray[0].id}_${photoArray[0].secret}.jpg`) 
    
    
   
    
  

  return (
    <div className="Filmstrip">
       {photoArray.map(element => <div className="Box"><img src={`https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`}/></div>)} 
      
    </div>
  );
};

export default Filmstrip;
