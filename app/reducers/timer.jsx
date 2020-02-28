import {GLOBAL_CONFIG} from '../config/config.js';

function timer(state = GLOBAL_CONFIG.timeout, action = {}){
  switch (action.type){

  case 'FINISH_APP':

    return 0;

  case 'TIMER':

    return action.time;

  default:
    return state;
  }
}

export default timer;