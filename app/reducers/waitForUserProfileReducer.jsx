function waitForUserProfileReducer(state = false, action){
  switch (action.type){
  case 'SCORM_CONNECTED':
    if(action.scorm === false){
      return false;
    }
    return state;
  case 'UPDATE_USER_PROFILE':
    return false;
  default:
    return state;
  }
}
<<<<<<< HEAD
export default waitForUserProfileReducer;
=======

export default waitForUserProfileReducer;
>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87
