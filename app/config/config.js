export let GLOBAL_CONFIG = {
  dev:{
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    // locale: "es",
    adaptive:true,
    finish_screen:true,
    title:"DIGITAL LOCK",
    showUsername:"true",
    timeout:"300",
    answer:"0001",
    tip:"Select the top 3 points starting from the left",
    CombinationLockImage:"./../assets/images/CajaFuerte.png",
    modes:["Symbol", "AlphaNumeric", "Pattern", "CombinationLock"],
    mode:"CombinationLock",
    themes:["dark", "lux", "cerulean", "cyborg", "pulse", "sketchy", "superhero"],
    theme:"sketchy",
    good:"Enhorabuena, lo has logrado!!",
    bad:"Lo siento, se acabó tu tiempo",
    escapp: true,
    puzzleId: 5,
    escapeRoomId: 1,
    puzzleLength: 4,

    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:undefined,
  },
  production:{
    debug:false,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    adaptive:true,
    finish_screen:true,
    title:"DIGITAL LOCK",
    showUsername:"true",
    timeout:"300",
    answer:"012",
    tip:"Select the top 3 points starting from the left",
    CombinationLockImage:"./../assets/images/CajaFuerte.png",
    modes:["Symbol", "AlphaNumeric", "Pattern", "CombinationLock"],
    mode:"Symbol",
    themes:["dark", "lux", "cerulean", "cyborg", "pulse", "sketchy", "superhero"],
    theme:"sketchy",
    good:"Enhorabuena, lo has logrado!!",
    bad:"Lo siento, se acabó tu tiempo",
    escapp: true,
    puzzleId: 5,
    escapeRoomId: 1,
    puzzleLength: 4,

    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:undefined,
  },
};

(function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();
