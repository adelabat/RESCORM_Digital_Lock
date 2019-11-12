import React from 'react';
export default class Index extends React.Component {
	render() {
		return(
			<div>
			<h3>Index:</h3>
			
			<button class="btn-borde" onClick={()=>{
				return this.props.onChangeQuestion(0);	
			}}>1</button><p/>
			<button class="btn-borde" onClick={()=>{
				return this.props.onChangeQuestion(1);
			}}>2</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(2);	
			}}>3</button><p/>
			<button class="btn-borde" onClick={()=>{
				return this.props.onChangeQuestion(3);	
			}}>4</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(4);	
			}}>5</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(5);	
			}}>6</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(6);	
			}}>7</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(7);	
			}}>8</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(8);	
			}}>9</button><p/>
			<button class="btn-borde " onClick={()=>{
				return this.props.onChangeQuestion(9);	
			}}>10</button><p/>




			</div>	
		);	
		
	}
}
