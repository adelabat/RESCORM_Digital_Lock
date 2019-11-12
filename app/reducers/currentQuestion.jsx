function currentQuestion(state = 0, action = {}) {
	switch (action.type) {

		case 'CHANGE_QUESTION':
			return action.payload.index;

		case 'INIT_QUESTIONS':

			return 0;	

		default:
			return state;
	}
}