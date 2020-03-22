import React from 'react';
import * as I18n from '../vendors/I18n.js';
import {GLOBAL_CONFIG} from '../config/config.js';
import {isEmbeddedInEscapp} from '../vendors/Utils';

export default class Header extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let loggedText;

    if (this.props.user_profile){
      if ((typeof this.props.user_profile.name === "string")){
        loggedText = (I18n.getTrans("i.logged_as") + " " + this.props.user_profile.name);
      }
    }

    let loggedEl;
    if (typeof loggedText === "string" && GLOBAL_CONFIG.showUsername && ((!GLOBAL_CONFIG.escapp && isEmbeddedInEscapp()) || (GLOBAL_CONFIG.escapp || !isEmbeddedInEscapp()))){
      loggedEl = <p id="logged_user">{loggedText}</p>;
    }

    let timer;

    if (GLOBAL_CONFIG.timeout){
      timer = <div className="center">
        <h4>{I18n.getTrans("i.time")}:</h4>
        <h4>{this.props.time} {I18n.getTrans("i.seconds")}.</h4>
      </div>;
    }
    return (
      <div className="header_wrapper">
        <h1 className="globalTitle">{GLOBAL_CONFIG.title}</h1>
        <br/>
        {loggedEl}
        {timer}
      </div>
    );
  }
}