import React from 'react';


import * as Utils from '../vendors/Utils.js';
import {addObjectives, finishApp} from './../reducers/actions';

import QuizHeader from './QuizHeader.jsx';
import Symbol from './Symbol.jsx';

import Spinner from 'react-bootstrap/Spinner';

export default class Lock extends React.Component {
  constructor(props){
    super(props);
    let quiz = this.props.quiz;
    let questions = quiz.questions;
    quiz.questions = questions;

    let respuesta = this.props.config.answer.toLowerCase().split("");
    for(let i = 0; i < respuesta.length; i++){
    respuesta.splice(i, 1, i); }
    // let respuesta = this.props.I18n.getTrans("i.answer");
    // let new_current_choice_index = Object.assign([], this.state.current_choice_index);
    // for(let i = 0; i < respuesta.length; i++){
    // new_current_choice_index.splice(i, i); }
    // this.setState({current_choice_index: new_current_choice_index});

    this.state = {
      quiz:quiz,
      current_question_index:1,
      answered:this.props.answered,
      current_choice_index:respuesta,

    };

    // Inicializar el array para varios tamaños de la palabra

  }

  componentDidMount(){
    // Create objectives (One per question included in the quiz)
    let objectives = [];
    let nQuestions = this.state.quiz.questions.length;
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Question" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }

  onNextQuestion(){
    let isLastQuestion = (this.state.current_question_index === this.state.quiz.questions.length);
    if(isLastQuestion === false){
      this.setState({current_question_index:(this.state.current_question_index + 1)});
      this.setState({answered:false});
    } else {
      this.props.dispatch(finishApp(true));

    }
  }

  onChangeSymbol(index, content){
    let newCurrentChoices = Object.assign([], this.state.current_choice_index);
    newCurrentChoices.splice(index, 1, content);
    this.setState({current_choice_index:newCurrentChoices});
  }

  async onFinish(answer){

    // an imaginary api call
    // let answer = this.props.config.answer.toLowerCase();

    const res = await fetch("https://escapp.dit.upm.es/api/escapeRooms/1/puzzles/5/check", {
      method: 'POST',
      body: JSON.stringify({token: "a.delabat@alumnos.upm.es", solution: answer}),
      headers: {"Content-type": "application/json"}
    });
    const correct = res.ok
    const msg = await res.json();
    console.log(msg)
      if (correct) {
          this.setState({answered:true});
      }
    }


  render(){

    let currentQuestion = this.state.quiz.questions[this.state.current_question_index - 1];
    let isLastQuestion = (this.state.current_question_index === this.state.quiz.questions.length);
    let objective = this.props.tracking.objectives["Question" + (this.state.current_question_index)];
    let respuesta = this.props.config.answer.toLowerCase();

    let choices = [];
    for(let i = 0; i < respuesta.length; i++){
      choices.push(
      <Symbol
                     respuestai = {respuesta.charAt(i)}
                     i={i}
                     current_choice_index = {this.state.current_choice_index}
                     question={currentQuestion}
                     iquestion={this.state.current_question_index}
                     answered={this.state.answered}
                     dispatch={this.props.dispatch}
                     I18n={this.props.I18n}
                     objective={objective}
                     isLastQuestion={isLastQuestion}
                     quizCompleted={this.props.tracking.finished}
                     onNextQuestion={this.onNextQuestion.bind(this)}
                     onChangeSymbol={this.onChangeSymbol.bind(this)}
                          />);
    }
    let choice=choices.map((el)=>{
    return(<td key={el.toString()} style={{ border: "none" }}>{el}</td>);
    });

    let answer = [];
    for(let i = 0; i < this.props.config.puzzleLength; i++){
    answer.splice(i, 1, i); }
    let button;
    if(this.state.answered === true){
      button = <button type="button" className="btn btn-outline-success" onClick={this.onNextQuestion.bind(this)}>
        {this.props.I18n.getTrans("i.next")}</button>;
    } else {
      button = <td align="center">
        <button className="button_lock"
          onClick={ () => {
            for(let i = 0; i < respuesta.length; i++){
            answer.splice(i, 1, currentQuestion.choices[this.state.current_choice_index[i]].id.toLowerCase());
            }
            console.log(answer.join(""));
            if(this.props.config.escapp){
              this.onFinish(answer.join(""));
            } else {
              if(answer.join("") === respuesta){
              return this.setState({answered:true});
            }
          }}}>
          <Spinner animation="border" role="success"/>
          <img src="./../assets/images/lock.png" width="80px" height="100px" />
          <p/>Try!!
        </button>

      </td>;
    }

    return (
      <div className="quiz">
        <QuizHeader I18n={this.props.I18n}
          quiz={this.state.quiz}
          currentQuestionIndex={this.state.current_question_index}/>

        <table className="table">
          <tr >
            {choice}
          </tr>
        </table>
        <table className="table">
          <tr>
            {button}
          </tr>

        </table>
      </div>
    );
  }
}
