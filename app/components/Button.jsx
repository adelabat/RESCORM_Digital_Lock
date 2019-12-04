import React from 'react';
export default class Button extends React.Component {

	render() {
		return(
			<button className="button_arrow"
			onClick={this.props.buttonFunc}>
			{this.props.buttonName}</button>
			);
	}
}
