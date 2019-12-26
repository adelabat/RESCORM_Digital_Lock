import React from 'react';
import Button from "./Button";

<<<<<<< HEAD:app/components/Symbol.jsx


export default class Symbol extends React.Component {
=======
export default class MCQuestion extends React.Component {
>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87:app/components/MCAnswer.jsx
  constructor(props){
    super(props);

    this.state = {
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
<<<<<<< HEAD:app/components/Symbol.jsx
    if(this.props.answered===true){
      button = <img src="./../assets/images/lock2.png" width="80px" height="100px" />

    }else{
       button =   <table>
            <tr>
              <td align="center">

                  <img src={this.props.question.choices[currentChoice].value} width="250px" height="200px" />

              </td>

            </tr>

            <tr>
              <td align="center">

               <Button buttonName=<div class="arrow1"></div>

               buttonFunc={ () => {
               if (currentChoice!==0){
                  return this.props.onChangeSymbol(this.props.i, currentChoice - 1 );
                }else{
                  return;
=======
    if(this.props.answered === true){
      button = <img src="./../assets/images/lock2.png" width="80px" height="100px" />;

    } else if(this.props.iquestion === 1){
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

>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87:app/components/MCAnswer.jsx
                }
                return;

              }}/>

          </td>

        </tr>
      </table>;

    } else if(this.props.iquestion === 2){
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

<<<<<<< HEAD:app/components/Symbol.jsx
                buttonFunc={ () => {
                if (currentChoice!==this.props.question.choices.length - 1){
                   return this.props.onChangeSymbol(this.props.i, currentChoice + 1 );

                  }else{
                    return;
                  }
                }}/>
=======
              }}/>
>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87:app/components/MCAnswer.jsx

          </td>

<<<<<<< HEAD:app/components/Symbol.jsx
            </tr>
                    </table>

      }

    return (

      <div className="table"><div class="img">
      {button}
      </div></div>
=======
        </tr>
      </table>;

    }

    return (

      <div className="table">
        {button}
      </div>
>>>>>>> 02a1041eefb1516c0d7d956c60971da5e6fb6c87:app/components/MCAnswer.jsx
    );
  }
}
