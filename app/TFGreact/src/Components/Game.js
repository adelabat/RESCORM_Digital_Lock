//Código básico para un componente
import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar";

export default class Game extends React.Component {
	render() {
		return (
			<div >
			<Content question={this.props.question}
					 question2={this.props.question2}
					 iCurrentQuestion={this.props.iCurrentQuestion}
					 iCurrentQuestion2={this.props.iCurrentQuestion2}
					 onChangeQuestion={this.props.onChangeQuestion}
					 onQuestionAnswer={this.props.onQuestionAnswer}
					 score={this.props.score}
					 questions={this.props.questions}
					 questions2={this.props.questions2}
					 time={this.props.time}/>

			</div>
			
		);
	}
}
