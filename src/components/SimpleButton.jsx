// SimpleButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SimpleButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SimpleButton;