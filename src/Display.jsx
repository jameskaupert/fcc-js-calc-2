import React from 'react';

const Display = props => {
  return (
    <div className="display-container">
      <div id="currentCalculation">{props.currentCalculation}</div>
      <div id="display">{props.displayValue}</div>
    </div>
  );
};

export default Display;
