import React from "react";

const Filmstrip = (props) => {

        let photoArray= props.photoArr
        console.log("heeeeeeee", photoArray)
    

  return (
    <div className="Filmstrip">
       {photoArray.map(element => <div className="Box"><img src={`https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`}/></div>)} 
      
    </div>
  );
};

export default Filmstrip;
