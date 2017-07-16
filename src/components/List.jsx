import React from 'react';
import PropTypes from 'prop-types';

const List = ({ tracks, filter }) => (
  <ul>
    {tracks.map((item) => {
      if (item.trim().toLowerCase().includes(filter.trim().toLowerCase())) {
        return <li key={item}>track: {item}</li>;
      }
      return null;
    })}
  </ul>
);

List.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
};

export default List;
