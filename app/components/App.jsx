import React from 'react';
import {connect} from 'react-redux';


import {GLOBAL_CONFIG} from '../config/config.js';
require('./../assets/scss/main_'+GLOBAL_CONFIG.theme+'.scss');
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/samples.js';
import * as SAMPLES2 from '../config/samples2.js';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import Lock from './Lock.jsx';
import CajaFuerte from './CajaFuerte.jsx';
import Pattern from './Pattern.jsx';
import {finishApp, timer} from './../reducers/actions';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();

    // Candado Resuelto
    this.state = {
      answered:false,
      timeout:false,
    };
  }
  componentDidMount(){

    setInterval(() =>{
      if(this.props.timer === 0 && this.props.tracking.finished !== true){
        this.setState({timeout:true});
        this.props.dispatch(finishApp(true));

      } else {
        this.props.dispatch(timer(this.props.timer - 1));

      }

    }, 1000);
  }

  render(){
    let appHeader = "";
    let appContent = "";

    if((this.props.tracking.finished !== true) || (GLOBAL_CONFIG.finish_screen === false)){
      appHeader = (
        <Header user_profile={this.props.user_profile}
          tracking={this.props.tracking}
          config={GLOBAL_CONFIG}
          time={this.props.timer}
          answered={this.state.answered}
          I18n={I18n}/>
      );
      if (GLOBAL_CONFIG.mode==="Symbol") {
             appContent = (
               <Lock dispatch={this.props.dispatch}
                     user_profile={this.props.user_profile}
                     tracking={this.props.tracking}
                     quiz={SAMPLES.lock_example}
                     answered={this.state.answered}
                     config={GLOBAL_CONFIG}
                     I18n={I18n}/>
             );
           }

       else if (GLOBAL_CONFIG.mode==="AlphaNumeric") {
            appContent = (
              <Lock dispatch={this.props.dispatch}
                    user_profile={this.props.user_profile}
                    tracking={this.props.tracking}
                    quiz={SAMPLES2.lock_example}
                    answered={this.state.answered}
                    config={GLOBAL_CONFIG}
                    I18n={I18n}/>
            );
          }

        else if (GLOBAL_CONFIG.mode==="Pattern") {
                      appContent = (
                        <Pattern dispatch={this.props.dispatch}
                              user_profile={this.props.user_profile}
                              config={GLOBAL_CONFIG}
                              tracking={this.props.tracking}
                              quiz={SAMPLES2.lock_example}
                              answered={this.state.answered}
                              I18n={I18n}/>
                      );
                    }

        else if (GLOBAL_CONFIG.mode==="CajaFuerte") {
               appContent = (
                 <CajaFuerte dispatch={this.props.dispatch}
                       user_profile={this.props.user_profile}
                       config={GLOBAL_CONFIG}
                       I18n={I18n}/>
               );
             }

    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch}
          user_profile={this.props.user_profile}
          tracking={this.props.tracking}
          quiz={SAMPLES.lock_example}
          config={GLOBAL_CONFIG}
          timeout={this.state.timeout}
          I18n={I18n}/>
      );
    }

    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch}
          tracking={this.props.tracking}
          time={this.props.timer}
          config={GLOBAL_CONFIG}/>
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
