//Estado de nuestra app
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import App from '../App';
import '../App.css';
import { questions } from "../assets/mock-data";
import { questions2 } from "../assets/mock-data";

export default class ReduxProvider extends React.Component {
	constructor(props) {
	super(props);
		this.initialState = { 
			score: 0,
			finished: false,
			currentQuestion: 0,
			timer:300,
			questions: [ ...questions
			],
			questions2: [ ...questions2
			]

		};
		this.store = this.configureStore();
	}
	render() {
	
		return (
			<Provider store={ this.store }>
			<main>
				
				<div style={{ height: '100%' }} >
					<App store={ this.store } />
				</div>
			</main>	
			</Provider>
		);
	}
	configureStore() {
	return createStore(GlobalState, this.initialState);
	
	}
}