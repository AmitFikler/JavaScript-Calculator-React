import React from 'react';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="device"> </div>
        <div className="screen">SCREEN </div>
        <div className="AC">AC</div>
        <div className="div">/</div>
        <div className="mul">X</div>
        <div className="minus">-</div>
        <div className="plus"> +</div>
        <div className="equels">= </div>
        <div className="one"> 1</div>
        <div className="two"> 2</div>
        <div className="three">3 </div>
        <div className="four"> 4</div>
        <div className="five">5 </div>
        <div className="six"> 6</div>
        <div className="seven">7 </div>
        <div className="eight">8 </div>
        <div className="nine">9 </div>
        <div className="zero">0 </div>
        <div className="dot"> .</div>
      </div>
    );
  }
}

export default App;
