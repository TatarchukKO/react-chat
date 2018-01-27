import React, { Component } from 'react';

const formInputStyles = {
  'display': 'block',
  'border': '1px solid #ccc',
  'borderRadius': '4px',
  'padding': '10px',
  'width': 'calc(90% - 20px)',
  'margin': '0 auto',
  'resize': 'none',
  'overflowY': 'auto',
  'overflowX': 'hidden',
  'minHeight': '10%',
};

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.changeIsActiveState = this.changeIsActiveState.bind(this);
  }

  

  isActive() {
    return !!this.state.isActive;
  }

  changeIsActiveState() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <textarea placeholder="Type the message" style={formInputStyles}></textarea>
    );
  }

}

export default InputForm;