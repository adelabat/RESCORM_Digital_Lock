export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
    score:0,
    objectives:{},
    finished:false,
  },
  scorm:null,
  user_profile:{
    id:undefined,
    name:"Unknown",
    learner_preference:{},
  },
  wait_for_user_profile:false,
};
