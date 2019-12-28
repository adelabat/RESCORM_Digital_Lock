export let GLOBAL_CONFIG = {
  dev:{
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    // locale: "es",
    adaptive:true,
    finish_screen:true,
    answer:"ab",
    modes:["Symbol", "Pattern", "CajaFuerte", "Candado"],
    mode:"Symbol",
    themes:["dark", "cerulean", "cyborg", "journal", "lux", "minty","pulse","sketchy","superhero"],
    theme:"lux",
    good:"Enhorabuena, lo has logrado!!",
    bad:"Lo siento, se acabó tu tiempo",

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
    answer:"abcd",
    modes:["Symbol", "AlphaNumeric", "CajaFuerte", "Candado"],
    mode:"Symbol",
    themes:["dark", "cerulean", "cyborg", "journal", "lux", "minty","pulse","sketchy","superhero","united"],
    theme:"lux",
    good:"Enhorabuena, lo has logrado",
    bad:"Lo siento, se acabó tu tiempo",

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
