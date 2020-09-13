import React, { useState } from "react";

function Search () {
const[searchTerm, setSearchTerm] = useState('');
return (
    <div>
        <input type="text" placeholder="What do you want to see?" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <button>Search</button>


    </div>



)


}

export default Search