//lógica de la app
import { combineReducers } from 'redux';
import {FINISHED, QUESTION_ANSWER} from './actions'
import { CHANGE_QUESTION} from './actions';
import { SUBMIT} from './actions';
import { INIT_QUESTIONS} from './actions';
import { TIMER} from './actions';


function score(state = 0, action = {}) {
	switch (action.type) {
		case SUBMIT:
			var score=0;
			action.payload.questions.map((question,i)=>{
				if (typeof question.userAnswer !== "undefined"){
					if (question.answer.trim().toLowerCase()===question.userAnswer.trim().toLowerCase()) {
						score=score+1;
					}
				}
			})
			return score;

		case INIT_QUESTIONS:

			return 0;

		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch (action.type) {

		case FINISHED:
			action.payload.finished=true;
			return action.payload.finished;

		case INIT_QUESTIONS:
			 action.payload.finished= false;
			return action.payload.finished;

		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch (action.type) {

		case CHANGE_QUESTION:
			return action.payload.index;

		case INIT_QUESTIONS:

			return 0;	

		default:
			return state;
	}
}

function currentQuestion2(state = 0, action = {}) {
	switch (action.type) {

		case CHANGE_QUESTION:
			return action.payload.index;

		case INIT_QUESTIONS:

			return 0;	

		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((question,i) => {
				return { ...question,
							userAnswer: action.payload.index === i ? //actualizará la pregunta en la pos indicada para que contenga la respuesta introducida por el usuario
										action.payload.answer : question.userAnswer}
			})
		case INIT_QUESTIONS:
			return action.payload.questions
		default:
			return state;
	}
}

function questions2(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((question2,i) => {
				return { ...question2,
							userAnswer: action.payload.index === i ? //actualizará la pregunta en la pos indicada para que contenga la respuesta introducida por el usuario
										action.payload.answer : question2.userAnswer}
			})
		case INIT_QUESTIONS:
			return action.payload.questions2
		default:
			return state;
	}
}

function timer(state = 300, action = {}) {
	switch (action.type) {

		case SUBMIT:

			return 0;

		case INIT_QUESTIONS:

			return 300;
		case TIMER:

			return action.payload.time;


		default:
			return state;
	}
}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	currentQuestion2,
	questions,
	questions2,
	timer
}));

export default GlobalState;
