import React from 'react';
import {connect} from 'react-redux';

import {GLOBAL_CONFIG} from '../config/config.js';
require('./../assets/bootswatch/' + GLOBAL_CONFIG.theme + '.bootstrap.min.css');
require("./../assets/scss/index.scss");
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/samples.js';
import * as SAMPLES2 from '../config/samples2.js';
import * as Utils from '../vendors/Utils.js';
import {addObjectives, finishApp, timer, objectiveAccomplished} from './../reducers/actions';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import Lock from './Lock.jsx';
import CombinationLock from './CombinationLock.jsx';
import Padlock from './Padlock.jsx';
import Pattern from './Pattern.jsx';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();
    this.state = {
      timeout: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    setInterval(() =>{
      if (GLOBAL_CONFIG.timeout && !this.state.stopTime){
        if (this.props.timer === 0 && this.props.tracking.finished !== true){
          this.setState({timeout: true});
          this.onSubmit(true, false, GLOBAL_CONFIG.bad, 0);
        } else if (this.props.timer > 0){
          this.setState({timeout: false});
          this.props.dispatch(timer(this.props.timer - 1));
        }
      }
    }, 1000);
    this.props.dispatch(addObjectives([new Utils.Objective({id: ("DigitalLock"), progress_measure: 1, score: 1})]));
  }

  async onSubmit(finished, ok, msg, score = 1){
    this.setState({stopTime: true});
    await Utils.timeout(2000);
    this.props.dispatch(objectiveAccomplished("DigitalLock", score));
    this.props.dispatch(finishApp(finished, ok, msg));
  }

  render(){
    let appHeader = "";
    let appContent = "";

    if ((this.props.tracking.finished !== true) || (GLOBAL_CONFIG.finish_screen === false)){
      appHeader = <Header user_profile={this.props.user_profile} time={this.props.timer}/>;
      switch (GLOBAL_CONFIG.mode){
      case "Symbol":
        appContent = <Lock onSubmit={this.onSubmit} quiz={SAMPLES.lock_example}/>;
        break;
      case "AlphaNumeric":
        appContent = <Lock onSubmit={this.onSubmit} quiz={SAMPLES2.lock_example}/>;
        break;
      case "Pattern":
        appContent = <Pattern onSubmit={this.onSubmit}/>;
        break;
      case "CombinationLock":
        appContent = <CombinationLock onSubmit={this.onSubmit}/>;
        break;
      case "Padlock":
        appContent = <Padlock onSubmit={this.onSubmit}/>;
        break;
      }

    } else {
      appContent = <FinishScreen dispatch={this.props.dispatch} msg={this.props.tracking.msg}/>;
    }

    return (
      <div className="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} time={this.props.timer} />
        {appHeader}
        {appContent}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);