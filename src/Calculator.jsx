import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';
import './Calculator.css';

const operators = /[+\-/x]/;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      currentCalculation: '',
      previousCalc: '0'
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleNonZero = this.handleNonZero.bind(this);
  }
  handleClear() {
    this.setState({
      displayValue: '0',
      currentCalculation: '',
      previousCalc: '0'
    });
  }
  handleOperator(e) {
    const keyPressed = e.target.innerHTML;
    const currentLength = this.state.currentCalculation.length;
    const mostRecentElem = this.state.currentCalculation[currentLength - 1];

    if (this.state.currentCalculation.includes('=')) {
      this.setState(prevState => ({
        currentCalculation: prevState.previousCalc + keyPressed,
        displayValue: keyPressed
      }));
    } else if (mostRecentElem.match(operators)) {
      this.setState(prevState => ({
        currentCalculation:
          prevState.currentCalculation.substring(0, currentLength - 1) +
          keyPressed,
        displayValue: keyPressed
      }));
    } else {
      this.setState(prevState => ({
        currentCalculation: prevState.currentCalculation + keyPressed,
        displayValue: keyPressed
      }));
    }
  }
  handleDecimal(e) {
    const keyPressed = e.target.innerHTML;
    console.log(`pressed decimal: ${keyPressed}`);
    if (!this.state.currentCalculation.includes('=')) {
      if (this.state.displayValue === '0') {
        this.setState(prevState => ({
          currentCalculation: '0.',
          displayValue: '0.'
        }));
      } else if (this.state.displayValue.indexOf('.') === -1) {
        this.setState(prevState => ({
          currentCalculation: prevState.currentCalculation + '.',
          displayValue: prevState.displayValue + '.'
        }));
      }
    }
  }
  handleEquals() {
    const invalidStarters = /^[+-/x0]$/;
    if (!this.state.currentCalculation.includes('=')) {
      if (this.state.displayValue.match(invalidStarters)) {
        this.setState(() => ({
          currentCalculation: '=NAN',
          displayValue: 'NAN'
        }));
      } else {
        const result =
          (eval(this.state.currentCalculation.replace(/x/, '*')) * 10000) /
          10000;
        this.setState(prevState => ({
          currentCalculation: prevState.currentCalculation + '=' + result,
          displayValue: result,
          previousCalc: result
        }));
      }
    }
  }
  handleZero() {
    if (this.state.displayValue === 'NAN') {
      this.setState({
        currentCalculation: '0',
        displayValue: '0'
      });
    } else if (this.state.displayValue !== '0') {
      this.setState(prevState => ({
        currentCalculation: prevState.currentCalculation + '0',
        displayValue: prevState.displayValue + '0'
      }));
    }
  }
  handleNonZero(e) {
    const keyPressed = e.target.innerHTML;
    console.log(`pressed a number other than zero: ${keyPressed}`);
    if (this.state.displayValue === 'NAN' || this.state.displayValue === '0') {
      this.setState({
        currentCalculation: keyPressed,
        displayValue: keyPressed
      });
    } else if (this.state.displayValue !== '0') {
      this.setState(prevState => ({
        currentCalculation: prevState.currentCalculation + keyPressed,
        displayValue: prevState.displayValue + keyPressed
      }));
    }
  }
  render() {
    return (
      <div className="calculator" id="calculator">
        <Display
          displayValue={this.state.displayValue}
          currentCalculation={this.state.currentCalculation}
        />
        <Keypad
          handleClear={this.handleClear}
          handleOperator={this.handleOperator}
          handleDecimal={this.handleDecimal}
          handleEquals={this.handleEquals}
          handleZero={this.handleZero}
          handleNonZero={this.handleNonZero}
        />
      </div>
    );
  }
}

export default Calculator;
