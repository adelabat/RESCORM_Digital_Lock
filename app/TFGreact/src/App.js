import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Components/Game";
import Navbar from "./Components/Navbar";
import Question from "./Components/Question";
import Answer from "./Components/Answer";
import Content from "./Components/Content";
import { questionAnswer} from './redux/actions'
import {changeQuestion} from './redux/actions';
import {Is_finished} from './redux/actions';
import {submit} from './redux/actions'
import {initQuestions} from './redux/actions';
import {timer} from './redux/actions';


class App extends Component {

   componentDidMount() {

  //       var questions=[];

  //       let token = "49e09e3d8c30170cefc4";
  //       let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token="+token;
  //       fetch(url) //toma como argumento la ruta y devuelve un objeto Promise
  //           .then(response=> response.json()) //extraemos el contenido con el metodo .json
  //           .then(myJson =>{
  //               questions= myJson
  //               console.log(questions)
  //               this.props.dispatch(initQuestions(questions))});


     var intervalo = setInterval(() =>{
           if (this.props.timer===0){
                this.props.dispatch(submit(this.props.questions))
                this.props.dispatch(Is_finished(this.props.finished))
            }else{
            this.props.dispatch(timer(this.props.timer-1));
           }

        },1000);
  }

render(){

     return (

      <div className="App">
                
        <Game question={this.props.questions[this.props.currentQuestion]}
              question2={this.props.questions2[this.props.currentQuestion]}
              score={this.props.score}
              iCurrentQuestion={this.props.currentQuestion}
              iCurrentQuestion2={this.props.currentQuestion2}
              questions={this.props.questions}
              questions2={this.props.questions2}
              time={this.props.timer}
              finished={this.props.finished}
              onQuestionAnswer={(answer)=>{
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))//lanzamos la acción pasándole índice de la pregunta y respuesta
              }} 
              onChangeQuestion={(nextQuestion)=>{
                  this.props.dispatch(changeQuestion(nextQuestion))
              }}
              onSubmit={(questions, finished)=>{
                  this.props.dispatch(submit(questions));
                  this.props.dispatch(Is_finished(finished))
              }}

              onInitQuestions= {(questions) => {
               		this.props.dispatch(initQuestions(questions))
              }}

                />
      </div>
      

    );
  }
}

function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(App);
