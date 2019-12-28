import React from 'react';

export default class QuizHeader extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div class="table">
        <table>

        <tr><td>
        <h2>{this.props.I18n.getTrans("i.quiz_header_title2")}
        </h2></td></tr>

          <tr><td>
            <p>{this.props.I18n.getTrans("i.quiz_header_title", {current:this.props.currentQuestionIndex, total:this.props.quiz.questions.length})}</p>
            <h2>{this.props.I18n.getTrans("i.quiz_header_title2")}
            </h2></td></tr>

        </table>
      </div>
    );
  }
}
