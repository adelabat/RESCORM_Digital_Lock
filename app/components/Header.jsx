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

    let loggedEl;
    if(typeof loggedText === "string" && this.props.config.showUsername === "true"){
      loggedEl = <p id="logged_user">{loggedText}</p>;
    }

    let timer;

    if(this.props.config.timeout !==""){
      timer=  <div className="center"><h4>Time:</h4>

        <h4>{this.props.time} segundos.</h4></div>;
    }
    return (
      <div className="header_wrapper">
        <h1>{this.props.config.title}</h1>
        <br/>
        {loggedEl}
        {timer}
      </div>
    );
  }
}
