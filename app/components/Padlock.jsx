import React from 'react';
import CombinationLock from 'combination-lock-react';
import {checkEscapp} from '../vendors/Utils';
import 'combination-lock-react/dist/index.css';
import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';

const {answer, escapp, good, tip, nonMetallic} = GLOBAL_CONFIG;

export default class Padlock extends React.Component {
  constructor(props){
    super(props);
    this.onMatch = this.onMatch.bind(this);
    this.state = {success: false};

  }
  render(){
    let respuesta = answer;
    return (
      <div className="center PadLock">
        <h2 className="center">{tip}</h2>
        <div className={"padlock-object" + (this.state.success ? " success" : "")}>
          <div className="handle" />
          <div className={"box " + (nonMetallic ? "non-metallic" : "")}>
            <CombinationLock
              combination= {respuesta}
              height={50}
              onMatch={this.onMatch}
              openText={I18n.getTrans("i.unlocked")}
            />
          </div>

        </div>

      </div>
    );
  }

  onMatch(){
    this.setState({success: true});
    if (escapp){
      checkEscapp(answer)
        .then(async({msg, ok})=>{
          this.props.onSubmit(true, ok, msg);
        });
    } else {
      let msg = good;
      let ok = true;
      this.props.onSubmit(true, ok, msg);
    }
  }
}