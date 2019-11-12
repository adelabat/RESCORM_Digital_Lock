import React from 'react';
export default class Question extends React.Component {

	

	render() {
		if (typeof this.props.question !== "undefined"){
				return(
				<div className="Question">
					<h2>{this.props.question.question}</h2>
				</div>
				);
			}else{
				return(
				<div className="Question">
					<h1>Lo sentimos mucho, no hay preguntas disponibles.</h1>
				</div>
			);
			}
			
	}
}
