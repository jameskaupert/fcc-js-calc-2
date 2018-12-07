import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className="display-container">
      <div className="row" id="currentCalculation">
        {props.currentCalculation}
      </div>
      <div className="row" id="display">
        {props.displayValue}
      </div>
    </div>
  );
};

export default Display;
