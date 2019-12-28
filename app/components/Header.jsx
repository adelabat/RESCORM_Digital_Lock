import React from 'react';


export default class Header extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let loggedText;

    if(this.props.user_profile){
      if((typeof this.props.user_profile.name === "string")){
        loggedText = (this.props.I18n.getTrans("i.logged_as") + " " + this.props.user_profile.name);
      }
    }

    let loggedEl = null;
    if(typeof loggedText === "string"){
      loggedEl = <p id="logged_user">{loggedText}</p>;
    }

    let progress_bar;
    if(this.props.answered===false){
      progress_bar= <div class="progress">
          <div class="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100%">
          </div>
        </div>
    }else{
      progress_bar= <div class="progress">
          <div class="progress-bar2  progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100%">
          </div>
        </div>


    }

    return (
      <div className="header_wrapper">
        <img src="assets/images/react_logo.png"/>
        <h1>{this.props.I18n.getTrans("i.title")}</h1>
        <br/>
        {loggedEl}
        {progress_bar}
        <h4>Time:</h4>
        <h4>{this.props.time} segundos.</h4>
      </div>
    );
  }
}
