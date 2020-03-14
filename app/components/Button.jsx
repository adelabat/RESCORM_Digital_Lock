import React from 'react';
export default class Button extends React.Component {

  render(){
    return (
      <button className="button-symbol" onClick={this.props.buttonFunc}>
        <span className="material-icons" style={{fontSize: this.props.fontSize}}>{this.props.buttonName}</span>
      </button>
    );
  }
}