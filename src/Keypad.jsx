import React from 'react';
import Key from './Key';
import './KeyPad.css';

const Keypad = props => {
  return (
    <div className="keypad" id="keypad">
      <Key
        keyName="AC"
        className="key"
        keyId="clear"
        onClick={props.handleClear}
      />
      <Key
        keyName="/"
        className="key"
        keyId="divide"
        onClick={props.handleOperator}
      />
      <Key
        keyName="x"
        className="key"
        keyId="multiply"
        onClick={props.handleOperator}
      />
      <Key
        keyName="7"
        className="key"
        keyId="seven"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="8"
        className="key"
        keyId="eight"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="9"
        className="key"
        keyId="nine"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="-"
        className="key"
        keyId="subtract"
        onClick={props.handleOperator}
      />
      <Key
        keyName="4"
        className="key"
        keyId="four"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="5"
        className="key"
        keyId="five"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="6"
        className="key"
        keyId="six"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="+"
        className="key"
        keyId="add"
        onClick={props.handleOperator}
      />
      <Key
        keyName="1"
        className="key"
        keyId="one"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="2"
        className="key"
        keyId="two"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="3"
        className="key"
        keyId="three"
        onClick={props.handleNonZero}
      />
      <Key
        keyName="="
        className="key"
        keyId="equals"
        onClick={props.handleEquals}
      />
      <Key
        keyName="0"
        className="key"
        keyId="zero"
        onClick={props.handleZero}
      />
      <Key
        keyName="."
        className="key"
        keyId="decimal"
        onClick={props.handleDecimal}
      />
    </div>
  );
};

export default Keypad;
