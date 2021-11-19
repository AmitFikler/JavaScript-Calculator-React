import React from 'react';
import Button from './Button';
import Screen from './Screen';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
      calculte: {
        firstNumber: undefined,
        sign: undefined,
        secondNumber: undefined,
      },
    };
  }
  pressOnNumber = (number) => {
    if (this.state.answer === 0) {
      this.setState({ answer: number });
    } else {
      this.setState({ answer: this.state.answer + number });
    }
  };
  pressOnSign = (sign) => {
    this.setState({
      calculte: {
        firstNumber: this.state.answer,
        secondNumber: undefined,
        sign: sign,
      },
    });
    this.setState({ answer: 0 });
    console.log(this.state.calculte, this.state.answer);
  };
  render() {
    return (
      <div className="parent">
        <div className="device"> </div>
        <Screen answer={this.state.answer} />
        <Button className="AC" sign="AC" />
        <Button className="div sign" sign="/" func={this.pressOnSign} />
        <Button className="mul sign" sign="X" func={this.pressOnSign} />
        <Button className="minus sign" sign="-" func={this.pressOnSign} />
        <Button className="plus sign" sign="+" func={this.pressOnSign} />
        <Button className="equels" sign="=" func={this.pressOnSign} />
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
        <Button className="dot" sign="." />
      </div>
    );
  }
}

export default App;
