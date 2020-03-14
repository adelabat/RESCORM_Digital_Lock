import React from 'react';
import CombinationLock from 'combination-lock-react';
import {checkEscapp} from '../vendors/Utils';
import 'combination-lock-react/dist/index.css';
import {GLOBAL_CONFIG} from '../config/config';

const {answer, escapp, good, tip, CombinationLockImage} = GLOBAL_CONFIG;

export default class Combination extends React.Component {
  constructor(props){
    super(props);
    this.onMatch = this.onMatch.bind(this);

  }
  render(){
    let imagen = CombinationLockImage;
    let respuesta = answer;
    return (
      <div className="center CombinationLock">
        <h2 className="center">{tip}</h2>
        <div className="CajaFuerte">
          <CombinationLock
            combination= {respuesta}
            height={50}
            onMatch={this.onMatch}
            openText={'Unlocked!'}
          />
        </div>
        <div className="CajaFuerte">
          <img src={imagen} />
        </div>
      </div>
    );
  }

  onMatch(){
    if (escapp){
      checkEscapp(answer).then(async({msg, ok})=>{
        this.props.onSubmit(true, ok, msg);
      });
    } else {
      let msg = good;
      let ok = true;
      this.props.onSubmit(true, ok, msg);
    }
  }
}