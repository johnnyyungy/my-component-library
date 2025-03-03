// ActionItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

import './ActionItem.css'; // Import your CSS file

const ActionItem = ({ children, appearance, icon, ...props }) => {
  const itemClass = `action-item action-item--${appearance}`;
  const iconElement = icon ? <span className="action-item__icon">{icon}</span> : null;

  return (
    <button className={itemClass} {...props}>
      {iconElement}
      {children}
    </button>
  );
};

ActionItem.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  icon: PropTypes.node,
};

export default ActionItem;