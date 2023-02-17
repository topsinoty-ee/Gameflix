import React from 'react';
const SearchBar = ({ value, onChange }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for games..."
          value={value}
          onChange={onChange}
          className="p-2 rounded-md"
        />
      </div>
    )
  }
  export default SearchBar
  