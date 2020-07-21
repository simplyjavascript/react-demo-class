import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.onSearch(search);
  }, [search]);

  return (
    <form>
      <div className="search_bar">
        <label htmlFor="search">Search For Cameras</label>
        <i className="fa fa-search search_icon"></i>

        <input
          autoComplete="off"
          value={search}
          type="text"
          id="search"
          placeholder="Eg: Nikon.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
