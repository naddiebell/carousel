import React, { useState } from "react";

function Search (props) {

const[searchTerm, setSearchTerm] = useState('');
const handleSearch = props.handleSearch
const handleKeyDown = props.handleKeyDown








return (
    <div className="Search">
        <input className="Searchbox" type="text" 
            placeholder="What do you want to see?" 
            value={searchTerm}  
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={(event)=> (event.key === "Enter")&&(handleKeyDown(searchTerm))}
            />
        <button className="Searchbox" 
        onClick={()=> handleSearch(searchTerm)}
        
        
        >
        Search</button>


    </div>



)


}





export default Search