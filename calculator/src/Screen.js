import React from 'react';
class Screen extends React.Component {
  render() {
    return <div className="screen">{this.props.answer}</div>;
  }
}

export default Screen;
