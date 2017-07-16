import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ input, onAdd, onRemove, onInputChange }) => (
  <div>
    <input
      type="text"
      placeholder="track name"
      value={input}
      onChange={(event) => onInputChange(event.target.value)}
    />
    <input
      type="button"
      value="add"
      onClick={() => {
        onAdd(input);
        onInputChange('');
      }}
    />
    <input
      type="button"
      value="remove"
      onClick={() => {
        onRemove(input);
        onInputChange('');
      }}
    />
  </div>
);

Form.propTypes = {
  input: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
