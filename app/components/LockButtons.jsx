import React from 'react';


export default class LockButtons extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
   
    return (
      <div className="center">
        
        <button className="answerQuestion" onClick={this.props.onAnswerQuestion}>
        {this.props.I18n.getTrans("i.submit")}
        </button>
       
        
        <button className="nextQuestion" onClick={this.props.onNextQuestion}>
        {this.props.I18n.getTrans("i.next")}
        </button>

       

     
      </div>
    );
  }
}