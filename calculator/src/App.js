import React from 'react';
import Button from './Button';
import Screen from './Screen';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
      firstNumber: undefined,
      secondNumber: undefined,
      sign: undefined,
    };
  }
  pressOnNumber = (number) => {
    if (this.state.answer === 0) {
      if (number !== '.') {
        this.setState({ answer: number });
      } else {
        return;
      }
    } else {
      this.setState({ answer: this.state.answer + number });
    }
  };
  pressOnSign = (sign) => {
    this.setState({
      firstNumber: this.state.answer,
      sign: sign,
    });
    this.setState({ answer: 0 });
  };
  pressOnEquels = () => {
    this.setState({ secondNumber: this.state.answer }, () => {
      let answer;
      switch (this.state.sign) {
        case '+':
          answer =
            Number(this.state.firstNumber) + Number(this.state.secondNumber);
          this.setState({ answer: answer });
          break;
        case '-':
          answer =
            Number(this.state.firstNumber) - Number(this.state.secondNumber);
          this.setState({ answer: answer });
          break;
        case 'X':
          answer =
            Number(this.state.firstNumber) * Number(this.state.secondNumber);
          this.setState({ answer: answer });
          break;
        case '/':
          answer =
            Number(this.state.firstNumber) / Number(this.state.secondNumber);
          this.setState({ answer: answer });
          break;
        default:
          break;
      }
    });
  };
  pressOnAC = () => {
    this.setState({
      answer: 0,
      firstNumber: undefined,
      sign: undefined,
      secondNumber: undefined,
    });
  };
  render() {
    return (
      <div className="parent">
        <div className="device"> </div>
        <Screen answer={this.state.answer} />
        <Button className="AC" sign="AC" func={this.pressOnAC} />
        <Button className="div sign" sign="/" func={this.pressOnSign} />
        <Button className="mul sign" sign="X" func={this.pressOnSign} />
        <Button className="minus sign" sign="-" func={this.pressOnSign} />
        <Button className="plus sign" sign="+" func={this.pressOnSign} />
        <Button className="equels" sign="=" func={this.pressOnEquels} />
        <Button className="one number" sign="1" func={this.pressOnNumber} />
        <Button className="two number" sign="2" func={this.pressOnNumber} />
        <Button className="three number" sign="3" func={this.pressOnNumber} />
        <Button className="four number" sign="4" func={this.pressOnNumber} />
        <Button className="five number" sign="5" func={this.pressOnNumber} />
        <Button className="six number" sign="6" func={this.pressOnNumber} />
        <Button className="seven number" sign="7" func={this.pressOnNumber} />
        <Button className="eight number" sign="8" func={this.pressOnNumber} />
        <Button className="nine number" sign="9" func={this.pressOnNumber} />
        <Button className="zero number" sign="0" func={this.pressOnNumber} />
        <Button className="dot" sign="." func={this.pressOnNumber} />
      </div>
    );
  }
}

export default App;
