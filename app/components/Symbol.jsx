import React from 'react';
import Button from "./Button";

export default class Symbol extends React.Component {
  constructor(props){
    super(props);
    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);
  }

  onUp(){
    let currentChoice = this.props.current_choice_index[this.props.i];

    return currentChoice === 0 ?
      this.props.onChangeSymbol(this.props.i, this.props.question.choices.length - 1) :
      this.props.onChangeSymbol(this.props.i, currentChoice - 1);
  }
  onDown(){
    let currentChoice = this.props.current_choice_index[this.props.i];

    return currentChoice === this.props.question.choices.length - 1 ?
      this.props.onChangeSymbol(this.props.i, 0) :
      this.props.onChangeSymbol(this.props.i, currentChoice + 1);
  }
  render(){
    let currentChoice = this.props.current_choice_index[this.props.i];
    return <div className="symbol">
      <div className="choice" >
        {this.props.question.choices[currentChoice].value ? <img className="symbol-img" src={this.props.question.choices[currentChoice].value}/> : this.props.question.choices[currentChoice].id}
      </div>
      <div className="buttons">
        <Button buttonName="keyboard_arrow_down" buttonFunc={this.onUp}/>
        <Button buttonName="keyboard_arrow_up" buttonFunc={this.onDown}/>
      </div>
    </div>;
  }
}