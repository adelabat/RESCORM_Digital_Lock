import React from 'react';
import './../assets/scss/finish_screen.scss';

export default class FinishScreen extends React.Component {

  render(){

    return (
      <div className="finish_screen">
        <h1 id="finish_title">{this.props.msg}</h1>
      </div>
    );
  }
}