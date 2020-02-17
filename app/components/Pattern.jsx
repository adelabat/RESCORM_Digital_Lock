import React from "react";
import PatternLock from "react-pattern-lock";
import {finishApp} from './../reducers/actions';

export default class Pattern extends React.Component {
  constructor(props){
    super(props);

  this.state = {
    path: [],
    isLoading: false,
    error: false,
    success: false,
    disabled: false,
    size: 3
  };
}

  onReset(){
    this.setState({
      path: [],
      success: false,
      error: false,
      disabled: false
    });
  };

  onChange(path){
    this.setState({ path: [...path] });
  };

  onNext(){
    this.props.dispatch(finishApp(true));
  }

  async onFinish(){

    // an imaginary api call
    // let answer = this.props.config.answer.toLowerCase();

    const res = await fetch("https://escapp.dit.upm.es/api/escapeRooms/1/puzzles/5/check", {
      method: 'POST',
      body: JSON.stringify({token: "a.delabat@alumnos.upm.es", solution: this.state.path.join("")}),
      headers: {"Content-type": "application/json"}
    });
    const correct = res.ok
    const msg = await res.json();
    console.log(msg)
    this.setState({ isLoading: true });
    setTimeout(()=>{
      if (correct) {
        this.setState({isLoading: false, success: true, disabled: true});
      } else {
        this.setState({ disabled: true, error: true });
        this.errorTimeout = window.setTimeout(() => {
          this.setState({
            disabled: false,
            error: false,
            isLoading: false,
            path: []
          });
        }, 1000);
      }
    }, 100);
  }

  render() {
    const { size, path, disabled, success, error, isLoading } = this.state;
    let tip = this.props.config.tip;
    return (
      <React.Fragment>
        <div className="center">
        <div className="output">
          {tip}
        </div>
        <div>Output : {this.state.path.join(", ")}</div>
        <div className="output"><br/>
        {success && (

          <button type="button"   style={{ margin: "0 auto", display: "block" }} className="btn btn-outline-success" onClick={this.onNext.bind(this)}>
          Click here to continue</button>


        )}
        </div>

        <PatternLock  style={{ margin: "0 auto" }}
          width={ 500 }
          size={size}
          onChange={this.onChange.bind(this)}
          path={path}
          error={error}
          onFinish={this.onFinish.bind(this)}
          connectorThickness={5}
          disabled={disabled || isLoading}
          success={success}
        />
        </div>
      </React.Fragment>
    );
  }
}