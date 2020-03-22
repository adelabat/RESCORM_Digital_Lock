export let GLOBAL_CONFIG = {
  dev: {...{
    debug: true,
    debug_scorm_api: true,
    debug_scorm_api_window: false,
    available_locales: ["en", "es"],
    title: "DIGITAL LOCK",
    showUsername: true,
    timeout: 94,
    answer: "8132",
    tip: "Tip to help you",
    CombinationLockImage: "./../assets/images/CajaFuerte.png",
    mode: "Padlock", // ["Symbol", "AlphaNumeric", "Pattern", "CombinationLock", "Padlock"]
    theme: "lux",
    good: "Enhorabuena, lo has logrado!!",
    bad: "Lo siento, no has acertado",
    escapp: true,
    nonMetallic: true,
    puzzleId: 5,
    escapeRoomId: 1,
    puzzleLength: 4,
    scorm: {
      completion_threshold: window.config && window.config.threshold ? (window.config.threshold / 100) : 0.5,
      score_threshold: window.config && window.config.threshold ? (window.config.threshold / 100) : 0.6,
    },
    n: undefined,
  }, ...window.config},
  production: {...{
    debug: false,
    debug_scorm_api: false,
    debug_scorm_api_window: false,
    available_locales: ["en", "es"],
    title: "DIGITAL LOCK",
    showUsername: true,
    timeout: 3,
    answer: "1234",
    tip: "Select the top 3 points starting from the left",
    CombinationLockImage: "./../assets/images/CajaFuerte.png",
    mode: "Pattern",
    theme: "superhero",
    good: "Enhorabuena, lo has logrado!!",
    bad: "Lo siento, has perdido",
    escapp: true,
    puzzleId: 1,
    escapeRoomId: 1,
    puzzleLength: 4,
    token: "a.delabat@alumnos.upm.es",
    scorm: {
      completion_threshold: window.config && window.config.threshold ? (window.config.threshold / 100) : 0.5,
      score_threshold: window.config && window.config.threshold ? (window.config.threshold / 100) : 0.5,
    },
    n: undefined,
  }, ...window.config},
};

(function(){
  let env = process.env.NODE_ENV || 'dev';
  if (typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();