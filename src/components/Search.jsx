import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ filter, onFilterChangeInput }) => (
  <input
    type="text"
    placeholder="search"
    value={filter}
    onChange={(event) => onFilterChangeInput(event.target.value)}
  />
);

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChangeInput: PropTypes.func.isRequired,
};

export default Search;
