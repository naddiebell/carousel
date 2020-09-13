import React, { useState } from "react";

function Search (props) {
const[searchTerm, setSearchTerm] = useState('');
const handleSearch = props.handleSearch

return (
    <div>
        <input type="text" placeholder="What do you want to see?" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <button onClick={()=> handleSearch(searchTerm)}>Search</button>


    </div>



)


}

export default Search