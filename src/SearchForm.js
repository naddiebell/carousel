import React, { useState } from "react";
import Loader from "./loading.js"

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = props.handleSearch;
  const handleKeyDown = props.handleKeyDown;

  

  return (
    <div className="Search">
      <input
        className="Searchbox"
        type="text"
        placeholder="I am feeling lucky"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" && handleKeyDown(searchTerm)
        }
      />
      <button className="Searchbox" 
      onClick={() => handleSearch(searchTerm)}
      >
        Search
      </button>
      
    </div>
  );
}

export default Search;
