import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <img
        src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
        alt="Search icon"
      />
      <input
        type="text"
        className="input-search-bar"
        name="search"
        placeholder="Search for a super food"
        value={props.value}
        onChange={(event) => props.handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
