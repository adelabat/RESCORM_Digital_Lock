import React from 'react';

import Symbol from './Symbol.jsx';
import {GLOBAL_CONFIG} from '../config/config';
const {answer, escapp, puzzleLength, good, bad, tip} = GLOBAL_CONFIG;
import {checkEscapp, timeout} from '../vendors/Utils';

export default class Lock extends React.Component {
  constructor(props){
    super(props);
    let {quiz, answered} = this.props;
    let current_choice_index = (escapp ? Array(puzzleLength).fill("") : answer.toLowerCase().split("")).map((_, i) => i);
    this.state = {quiz, answered, current_choice_index};
    this.lockClick = this.lockClick.bind(this);
  }

  onChangeSymbol(index, content){
    let current_choice_index = Object.assign([], this.state.current_choice_index);
    current_choice_index[index] = content;
    this.setState({current_choice_index});
  }

  render(){
    const currentQuestion = this.state.quiz.questions[0];
    const respuesta = (escapp ? Array(puzzleLength).fill("") : answer.toLowerCase().split(""));
    let className = "flex-symbols-container";
    className += this.state.success ? " success" : "";
    className += this.state.error ? " error" : "";

    return (
      <div className="quiz symbols">
        <h2 className="center">{tip}</h2>
        <div style={{"--number-of-symbols": escapp ? puzzleLength : answer.length}} className={className}>
          {respuesta.map((char, i) =>
            <Symbol i={i} key={i}
              current_choice_index = {this.state.current_choice_index}
              question={currentQuestion}
              onChangeSymbol={this.onChangeSymbol.bind(this)}
            />)
          }
        </div>
        <div className="center">{this.state.answered ? null :
          <button className="button_lock" onClick={this.lockClick}>
            <img src={`./../assets/images/${this.state.success ? "lock_open" : "lock_closed"}.png`} width="80px" height="100px" />
          </button>}</div>
      </div>
    );
  }

  async lockClick(){
    let currentQuestion = this.state.quiz.questions[0];
    let userAnswer = this.state.current_choice_index.reduce((accum, el)=>accum + currentQuestion.choices[el].id.toLowerCase(), "");
    let msg = bad;
    let ok = false;

    if (escapp){
      const res = await checkEscapp(userAnswer);
      msg = res.msg;
      ok = res.ok;
    } else if (answer && (userAnswer === answer.toLowerCase())){
      ok = true;
      msg = good;
    }

    if (ok){
      this.setState({success: true});
      this.props.onSubmit(true, true, msg);
    } else {
      this.setState({error: true});
      await timeout(2000);
      this.setState({error: false});
    }
  }
}