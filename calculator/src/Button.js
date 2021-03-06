import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.func(this.props.sign)}
        className={this.props.className}
      >
        {this.props.sign}
      </button>
    );
  }
}

export default Button;
