import React from 'react';
import './../assets/scss/finish_screen.scss';

export default class FinishScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let finishTitleText;
<<<<<<< HEAD
    if(this.props.timeout===true){
    finishTitleText =  this.props.config.bad;
    } else {
      finishTitleText =  this.props.config.good;
=======
    if(this.props.timeout === true){
      finishTitleText = "Sorry";
    } else {
      finishTitleText = "Enhorabuena!!";
>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87
    }

    return (
      <div className="finish_screen">
        <h1 id="finish_title">{finishTitleText}</h1>
      </div>
    );
  }
}