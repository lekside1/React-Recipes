import React from 'react';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchValue, onInputSearchValue }) => (
  <input
    className="search-bar glow-bar"
    key="key1"
    value={searchValue}
    placeholder="search recipes"
    onChange={onInputSearchValue}
  />
);

export default SearchBar;
