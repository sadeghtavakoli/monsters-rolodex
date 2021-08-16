import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ text, handleChange }) => {
  return (
    <div className="search-box">
      <input
        class="search-box"
        type="search"
        value={text}
        onChange={handleChange}
        placeholder="search monsters"
      />
    </div>
  );
};
