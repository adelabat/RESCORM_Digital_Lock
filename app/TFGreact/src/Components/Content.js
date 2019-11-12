import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Index from "./Index";
import Button from "./Button";

export default class Content extends React.Component {
	constructor(props){
		super(props);
		this.hayimagen = this.hayimagen.bind(this);
		

	}
	hayimagen(){
		if (this.props.question.attachment!==null){
			return <img src={this.props.question.attachment.url} width="250px" height="200px" alt="overlay"/>
		}
		else return
	}
	
	render() {
		
		
			return(
				<div className="Content">
					<div className="image">
					<table className="table">	
						<tr>
							<td>
								<Button buttonName=<img src="./arrow1.png" width="80px" height="70px"  /> 
								buttonFunc={ () => {
								if (this.props.iCurrentQuestion!==0){
									return this.props.onChangeQuestion(this.props.iCurrentQuestion-1);
								}else{
									return;
								}
								}}/>
							</td>
							



						</tr>

						<tr>
							<td>
								<div class="overlayone-radius">
										{this.hayimagen()}
										
								</div>
							</td>
							
						</tr>

						<tr>
							<td>
								<Button buttonName=<img src="./arrow2.png" width="80px" height="70px" /> 
								buttonFunc={ () => {
								if (this.props.iCurrentQuestion===(this.props.questions.length-1)){
								return;
								}else{
								return this.props.onChangeQuestion(this.props.iCurrentQuestion+1);
								}
								}}/>
							</td>
						
						</tr>

					</table>			
					</div>
					
					

					
				</div>
				);
		}
	}
