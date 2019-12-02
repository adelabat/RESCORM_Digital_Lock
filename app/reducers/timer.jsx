function timer(state = 100, action = {}) {
	switch (action.type) {

		case 'FINISH_APP':

			return 0;

		case 'TIMER':

			return action.time;


		default:
			return state;
	}
}

export default timer;
