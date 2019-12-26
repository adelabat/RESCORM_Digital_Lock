<<<<<<< HEAD
function timer(state = 200, action = {}) {
	switch (action.type) {
=======
function timer(state = 100, action = {}){
  switch (action.type){
>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87

  case 'FINISH_APP':

    return 0;

  case 'TIMER':

    return action.time;

  default:
    return state;
  }
}

export default timer;