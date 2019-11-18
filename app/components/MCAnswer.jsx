import React from 'react';
import './../assets/scss/main.scss';
import {objectiveAccomplished} from './../reducers/actions';
import Button from "./Button";
import Spinner from 'react-bootstrap/Spinner'




export default class MCQuestion extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      selected_choices_ids:[],
      answered:false,
      current_choice_index:0,
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


  onNextQuestion(){
    this.props.onNextQuestion();
  }


  onNextPicture(){
    let isLastPicture = (this.state.current_choice_index === this.props.question.choices.length);
    if(isLastPicture === 0){
    this.setState({current_choice_index:(this.state.current_choice_index + 1)});   
    }
  }

   onPreviousPicture(){
    let isFirstPicture = (this.state.current_choice_index === 0);
    if(isFirstPicture === 0){
    this.setState({current_choice_index:(this.state.current_choice_index + 1)});   
    }
  }

  render(){
    let currentChoice = this.state.current_choice_index;
    let button;
    if(this.state.answered===true){
      button = <img src="./../assets/images/lock2.png" width="80px" height="100px" />
    } else{

       button =   <table> 
            <tr>
              <td align="center">
                  <img src={this.props.question.choices[currentChoice].value} width="250px" height="200px" />
                  
              </td>
             
            </tr>

            <tr>
              <td align="center">
              
               <Button buttonName=<div class="arrow1"></div>
               
               buttonFunc={ () => {
               if (this.state.current_choice_index!==0){
                  return this.setState({ 
               current_choice_index:(
               this.state.current_choice_index - 1 )});
                }else{
                  return;
                }
                }}/>

                <Button buttonName=<div class="arrow2"></div>

                buttonFunc={ () => {
                if (this.state.current_choice_index!==this.props.question.choices.length - 1){
                  return this.setState({ 
                  current_choice_index:(
                  this.state.current_choice_index + 1 )});
                  }else{
                    return;
                  }
                }}/>


              </td>
           
             
            
            </tr>
            <tr>
              <td align="center">
              <button class="button_lock"
                onClick={ () => {
                if (this.props.question.choices[this.state.current_choice_index].id===this.props.respuestai){
                  return this.setState({answered:true});

                  }else{
                    return this.setState({answered:false});
                  }
                
                }}>
                <Spinner animation="border" role="success"/>
                <img src="./../assets/images/lock.png" width="80px" height="100px" />
                <p/>Try!!
                </button>

                 
              </td>
             
            </tr>

            
          </table>    
        



    }

   
    return (

      <div className="table">
      {button}     
      </div>
    );
  }
}