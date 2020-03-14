import React from "react";
import PatternLock from "react-pattern-lock";
import {GLOBAL_CONFIG} from '../config/config.js';

import {checkEscapp, timeout} from '../vendors/Utils';
const {escapp, answer, tip, good, bad} = GLOBAL_CONFIG;

export default class Pattern extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      path: [],
      isLoading: false,
      error: false,
      success: false,
      disabled: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }

  onChange(path){
    this.setState({path: [...path]});
  }

  async onFinish(){
    let correct = false;
    let msg = "";
    const path = this.state.path.map(n => n + 1);
    this.setState({isLoading: true});
    if (escapp){
      const res = await checkEscapp(path.join(""));
      correct = res.ok;
      msg = res.msg;
    } else {
      correct = path.join("") === answer;
      msg = correct ? good : bad;
    }
    await timeout(200);
    if (correct){
      this.setState({isLoading: false, success: true, disabled: true});
      this.props.onSubmit(true, correct, msg);
    } else {
      this.setState({disabled: true, error: true, wrong: msg || bad || ""});
      await timeout(2000);
      this.setState({path: [], isLoading: false, error: false, disabled: false, wrong: null});
    }
  }

  render(){
    const {path, disabled, success, error, wrong, isLoading} = this.state;
    let width = "80vw";
    if (window.innerWidth > 991.98){
      width = "500px";
    } else if (window.innerWidth > 767.98){
      width = "300px";
    } else if (window.innerWidth > 575.98){
      width = "300px";
    }
    return (
      <div className="pattern center">
        <h2 className="output">{tip}</h2>
        <div className="path">{this.state.path.map(n => n + 1).join(", ")}</div>
        <div className="error">{wrong || ""}</div>
        <PatternLock style={{margin: "0 auto"}}
          width={width}
          size={3}
          onChange={this.onChange}
          path={path}
          error={error}
          allowJumping
          onFinish={this.onFinish}
          connectorThickness={5}
          disabled={disabled || isLoading}
          success={success}
        />
      </div>
    );
  }
}