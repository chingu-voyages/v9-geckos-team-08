import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({ updateList }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const [input] = event.target.children;
    updateList(input.value);
  };

  return (
    <div className="form-container">
      <form className="SearchBar-Form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" />
        <button id="search-button" type="submit" />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  updateList: PropTypes.func.isRequired
};

export default SearchBar;
