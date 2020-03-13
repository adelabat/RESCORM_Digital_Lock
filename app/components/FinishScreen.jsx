import React from 'react';
import './../assets/scss/finish_screen.scss';

export default class FinishScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let finishTitleText;
    if(this.props.config.escapp===true){
      if(this.props.timeout === true){
        finishTitleText = "Respuesta incorrecta";
      } else {
        finishTitleText = "La respuesta es correcta pero no se ha registrado puesto que tu turno no está activo.";
      }
    } else{
      if(this.props.timeout === true){
        finishTitleText = this.props.config.bad;
      } else {
        finishTitleText = this.props.config.good;
      }
    }
    return (
      <div className="finish_screen">
        <h1 id="finish_title">{finishTitleText}</h1>
      </div>
    );
  }
}
