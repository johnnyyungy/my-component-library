// src/components/button.jsx
import React from 'react';
import './button.css'; // Import your CSS file

const Button = ({ label, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;