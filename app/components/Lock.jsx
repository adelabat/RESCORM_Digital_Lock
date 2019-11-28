import React from 'react';
import './../assets/scss/quiz.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives,  finishApp, } from './../reducers/actions';

import QuizHeader from './QuizHeader.jsx';
import MCAnswer from './MCAnswer.jsx';

import Spinner from 'react-bootstrap/Spinner'
    

export default class Lock extends React.Component {
  constructor(props){
    super(props);
    let quiz = this.props.quiz;
    let questions = quiz.questions;
    quiz.questions = questions;

    this.state = {
      quiz:quiz,
      current_question_index:1,
      answered:this.props.answered,
      current_choice_index:[0,1,2,4],

    };

    // Inicializar el array para varios tamaños de la palabra

    // let respuesta = this.props.I18n.getTrans("i.answer");
    // let new_current_choice_index = Object.assign([], this.state.current_choice_index);
    // for(let i = 0; i < respuesta.length; i++){
    // new_current_choice_index.splice(i, i); }
    // this.setState({current_choice_index: new_current_choice_index});   

    // Adaptive behaviour
    // Sort questions based on difficulty
    let adaptive_sorted = false;
    if((this.props.config.adaptive === true) && 
      (typeof props.user_profile === "object") && 
      (typeof props.user_profile.learner_preference === "object") && 
      (typeof props.user_profile.learner_preference.difficulty === "number")){
      let difficulty = props.user_profile.learner_preference.difficulty;
      if((difficulty >= 0) && (difficulty <= 10)){
        for(let i = 0; i < questions.length; i++){
          if((typeof questions[i].difficulty !== "number") || (questions[i].difficulty < 0) || (questions[i].difficulty > 10)){
            questions[i].difficulty = 5;
          }
          questions[i].suitability = (10 - Math.abs((questions[i].difficulty - difficulty))) / 10;
        }
        questions.sort(function(a, b){ return b.suitability - a.suitability; });
        adaptive_sorted = true;
      }
    }

    if(adaptive_sorted === false){
      questions = Utils.shuffleArray(questions);
    }



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
    } else {
      this.props.dispatch(finishApp(true));
    }
  }


  onChangeSymbol(index, content){
    let newCurrentChoices = Object.assign([], this.state.current_choice_index);
    newCurrentChoices.splice(index, 1, content);    
    this.setState({current_choice_index:newCurrentChoices});
  }

 
  
  render(){

    let currentQuestion = this.state.quiz.questions[this.state.current_question_index - 1];

    let isLastQuestion = (this.state.current_question_index === this.state.quiz.questions.length);

    let objective = this.props.tracking.objectives["Question" + (this.state.current_question_index)];


    let respuesta = this.props.config.answer;
    let choices = [];
    for(let i = 0; i < respuesta.length; i++){
      choices.push(
      <MCAnswer      
                     respuestai = {respuesta.charAt(i)} 
                     i={i}
                     current_choice_index = {this.state.current_choice_index}
                     question={currentQuestion} 
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
    return(<td key={el.toString()}>{el}</td>);
    });

    let contador=0;
    let button;
    if(this.state.answered===true){
      button =  <button className="nextQuestion" onClick={this.onNextQuestion.bind(this)}>
      {this.props.I18n.getTrans("i.next")}</button>
    } else{
       button = <td align="center">
              <button class="button_lock"
                onClick={ () => {
                for(let i = 0; i < respuesta.length; i++){
                  if (currentQuestion.choices[this.state.current_choice_index[i]].id===respuesta.charAt(i)){
                    contador++;
                  }else{
                     return;
                  }               
                }
                if(contador===respuesta.length){
                  return this.setState({answered:true});
                }
                
                }}>
                <Spinner animation="border" role="success"/>
                <img src="./../assets/images/lock.png" width="80px" height="100px" />
                <p/>Try!!
                </button>

              </td>
      }

    return (
      <div className="quiz">
        <QuizHeader I18n={this.props.I18n} 
                    quiz={this.state.quiz} 
                    currentQuestionIndex={this.state.current_question_index}/>

         <table className="table"> 
            <tr>
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