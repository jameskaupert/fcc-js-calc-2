import React from 'react';

const Key = props => {
  return (
    <button id={props.keyId} className="key" onClick={props.onClick}>
      {props.keyName}
    </button>
  );
};

export default Key;
