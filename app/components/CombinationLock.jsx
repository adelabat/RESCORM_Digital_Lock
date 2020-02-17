import React from 'react'
import CombinationLock from 'combination-lock-react'
import 'combination-lock-react/dist/index.css'
import {finishApp} from './../reducers/actions';


export default class Combination extends React.Component {

  render(){
  let imagen=this.props.config.CombinationLockImage;
  let respuesta=this.props.config.answer;
    return(

  <div class="center">
      <div class="CajaFuerte">
      <CombinationLock
        combination= {respuesta} //this.props.config.answer
        height={50}
        onMatch={() => {
          setTimeout(()=>{
          this.props.dispatch(finishApp(true));
        }, 1000); }}
        openText={'Unlocked!'}
      />
      </div>
      <div class="CajaFuerte">
        <img src={imagen}  width="520px" height="550px" />
      </div>
    </div>
    );
  }
}
