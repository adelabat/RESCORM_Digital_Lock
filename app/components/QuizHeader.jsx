import React from 'react';

export default class QuizHeader extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="table">
        <table>
          <tr><td>
            <div className="center"><h2>{this.props.I18n.getTrans("i.quiz_header_title2")}
            </h2></div></td></tr>
        </table>
      </div>
    );
  }
}
