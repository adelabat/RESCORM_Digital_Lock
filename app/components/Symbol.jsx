import React from 'react';
import Button from "./Button";

export default class Symbol extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected_choices_ids:[],
      answered:false,
      index:this.props.index,
      current_choice_index:this.props.current_choice_index[this.props.i],
    };

  }

  onNextQuestion(){
    this.props.onNextQuestion();
  }

  render(){
    let currentChoice = this.props.current_choice_index[this.props.i];
    let button;
    if(this.props.answered === true){
      button = <img src="./../assets/images/lock2.png" width="80px" height="100px" />;

    } else {
      if(this.props.question.choices[currentChoice].value===""){
        button = <table>
          <tr>
            <td align="center">
             {this.props.question.choices[currentChoice].id}
            </td>

          </tr>

          <tr>
            <td align="center">

              <Button buttonName=<div className="arrow1" />

                buttonFunc={ () => {
                  if(currentChoice !== 0){
                    return this.props.onChangeSymbol(this.props.i, currentChoice - 1);
                  }
                  return;

                }}/>

              <Button buttonName=<div className="arrow2" />

                buttonFunc={ () => {
                  if(currentChoice !== this.props.question.choices.length - 1){
                    return this.props.onChangeSymbol(this.props.i, currentChoice + 1);
                  }
                  return;

                }}/>

            </td>

          </tr>
        </table>;
      }else {
        button = <table>
          <tr>
            <td align="center">
              <img src={this.props.question.choices[currentChoice].value} width="250px" height="200px" />
            </td>

          </tr>

          <tr>
            <td align="center">

              <Button buttonName=<div className="arrow1" />

                buttonFunc={ () => {
                  if(currentChoice !== 0){
                    return this.props.onChangeSymbol(this.props.i, currentChoice - 1);
                  }
                  return;

                }}/>

              <Button buttonName=<div className="arrow2" />

                buttonFunc={ () => {
                  if(currentChoice !== this.props.question.choices.length - 1){
                    return this.props.onChangeSymbol(this.props.i, currentChoice + 1);
                  }
                  return;

                }}/>

            </td>

          </tr>
        </table>;
      }

    }

    return (

      <div className="table">
        {button}
      </div>
    );
  }
}
