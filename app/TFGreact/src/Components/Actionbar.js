import React from 'react';
import Button from "./Button";



export default class Actionbar extends React.Component {

	constructor(props) {
		super(props);
		this.isFinished = this.isFinished.bind(this);
	}
	isFinished(isFinished, onSubmit, onInitQuestions, oldQuestions, onChangeQuestion, iCurrentQuestion){
		
			if (isFinished) {
				
				return(
					<div className="ActionBar">
						<button	className="btn-borde" 
								onClick={()=>{
									return this.props.onInitQuestions(this.props.questions);
								}}>Play new game</button>
					</div>
				);

			}else{
				return(

				<div className="ActionBar">
					
					<Button buttonName="Previous Question" 
							iCurrentQuestion={this.props.iCurrentQuestion} 
							buttonFunc={ () => {
							if (iCurrentQuestion!==0){
								return onChangeQuestion(iCurrentQuestion-1);
							}else{
								return;
							}
					}}/>
					<Button buttonName="Submit" 
							buttonFunc={ () => {
							return this.props.onSubmit(oldQuestions,isFinished);
							}
					}/>

					<Button buttonName="Next Question" 
							iCurrentQuestion={this.props.iCurrentQuestion} 
							buttonFunc={ () => {
							if (iCurrentQuestion===(oldQuestions.length-1)){
								return;
							}else{
								return onChangeQuestion(iCurrentQuestion+1);
							}
						
					}}/>

					
				</div>
				);
			}
		
	}
	render() {
		return( 

				<div className="ActionBar">
					{this.isFinished(
						this.props.finished,
						this.props.onSubmit,
						this.props.downloadQuestions,
						this.props.questions,
						this.props.onChangeQuestion,
						this.props.iCurrentQuestion,
						)}
				</div>
		);	
	}
}