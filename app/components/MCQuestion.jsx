import React from 'react';

import {objectiveAccomplished} from './../reducers/actions';
import Iframe from 'react-iframe';
import MCQuestionChoice from './MCQuestionChoice.jsx';
import LockButtons from './LockButtons.jsx';


export default class MCQuestion extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      selected_choices_ids:[],
      answered:false,
    };

  }
  
  handleChoiceChange(choice){
    let newSelectedChoices = Object.assign([], this.state.selected_choices_ids);
    let indexOf = newSelectedChoices.indexOf(choice.id);
    if(indexOf === -1){
      newSelectedChoices.push(choice.id);
    } else {
      newSelectedChoices.splice(indexOf, 1);
    }
    this.setState({selected_choices_ids:newSelectedChoices});
  }
  onAnswerQuestion(){
    // Calculate score
    let nChoices = this.props.question.choices.length;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    // eslint-disable-next-line no-unused-vars
    let blankAnswers = 0;

    for(let i = 0; i < nChoices; i++){
      let choice = this.props.question.choices[i];
      if(this.state.selected_choices_ids.indexOf(choice.id) !== -1){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
        } else {
          incorrectAnswers += 1;
        }
      } else {
        blankAnswers += 1;
      }
    }
    let scorePercentage = Math.max(0, (correctAnswers - incorrectAnswers) / this.props.question.choices.filter(function(c){return c.answer === true;}).length);

    // Send data via SCORM
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * scorePercentage));
    // this.props.dispatch(objectiveAccomplishedThunk(objective.id, objective.score * scorePercentage));

    // Mark question as answered
    this.setState({answered:true});
  }
  onResetQuestion(){
    this.setState({selected_choices_ids:[], answered:false});
  }
  onNextQuestion(){
    this.props.onNextQuestion();
  }


  onNextPicture(){


  
    return 
 }


  render(){
    let choices1 = [];
    let choices2 = [];
    for(let i = 0; i < this.props.question.choices.length; i++){
      choices1.push(
      <MCQuestionChoice key={"MyQuestion_" + "question_choice_" + i} 
                        choice={this.props.question.choices[i]} 
                        checked={this.state.selected_choices_ids.indexOf(this.props.question.choices[i].id) !== -1} 
                        handleChange={this.handleChoiceChange.bind(this)} 
                        onNextPicture={this.onNextPicture.bind(this)}
                        questionAnswered={this.state.answered}
                        />);
                        
    }

    for(let i = 0; i < this.props.question.choices.length; i++){
      choices2.push(
      <MCQuestionChoice key={"MyQuestion_" + "question_choice_" + i} 
                        choice={this.props.question.choices[i]} 
                        checked={this.state.selected_choices_ids.indexOf(this.props.question.choices[i].id) !== -1} 
                        handleChange={this.handleChoiceChange.bind(this)} 
                        onNextPicture={this.onNextPicture.bind(this)}
                        questionAnswered={this.state.answered}
                        />);
                       
    }
    return (

      <div className="question">
        <h1>{this.props.question.value}</h1>
              

         <table className="table"> 
            <tr>
              <td>
                 <Iframe src="./../TFGreact/build/index.html"
                          width="275px"
                          height="420px"
                          id="myId"
                          display="initial"
                          position="relative"/>
              </td>
             <td>
                 <Iframe src="./../TFGreact/build/index.html"
                          width="275px"
                          height="420px"
                          id="myId"
                          display="initial"
                          position="relative"/>
              </td>
             <td>
                 <Iframe src="./../TFGreact/build/index.html"
                          width="275px"
                          height="420px"
                          id="myId"
                          display="initial"
                          position="relative"/>
              </td>
             <td>
                 <Iframe src="./../TFGreact/build/index.html"
                          width="275px"
                          height="420px"
                          id="myId"
                          display="initial"
                          position="relative"/>
              </td>
             
            </tr>

           
          </table>                                     
       
        
        <LockButtons I18n={this.props.I18n} 
                         onAnswerQuestion={this.onAnswerQuestion.bind(this)} 
                         onResetQuestion={this.onResetQuestion.bind(this)} 
                         onResetQuiz={this.props.onResetQuiz} 
                         onNextQuestion={this.onNextQuestion.bind(this)} 
                         answered={this.state.answered} 
                         quizCompleted={this.props.quizCompleted} 
                         allow_finish={this.props.isLastQuestion}/>
    
          
        
          </div>
    );
  }
}