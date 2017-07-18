import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTrack } from './../actions/addTrack';
import { removeTrack } from './../actions/removeTrack';
import { changeInput } from './../actions/changeInput';
import { changeFilterInput } from './../actions/changeFilterInput';

import Form from './../components/Form';
import List from './../components/List';
import Search from './../components/Search';
import Navigation from './../components/Navigation';

const App = ({ tracks, input, filter, onAdd, onRemove, onInputChange, onFilterChangeInput }) => (
  <div>
    <Navigation />
    <Form
      input={input}
      onAdd={onAdd}
      onRemove={onRemove}
      onInputChange={onInputChange}
    />
    <Search
      filter={filter}
      onFilterChangeInput={onFilterChangeInput}
    />
    <List tracks={tracks} filter={filter} />
  </div>
);

App.propTypes = {
  tracks: PropTypes.objectOf(PropTypes.any).isRequired,
  input: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFilterChangeInput: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    input: state.input,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (trackName) => dispatch(addTrack(trackName)),
    onRemove: (trackName) => dispatch(removeTrack(trackName)),
    onInputChange: (inputValue) => dispatch(changeInput(inputValue)),
    onFilterChangeInput: (filter) => dispatch(changeFilterInput(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
