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
        </table>
      </div>
    );
  }
}
