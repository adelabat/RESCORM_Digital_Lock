import React from 'react';
import './../assets/scss/main.scss';



export default class MCQuestionChoice extends React.Component {
  constructor(props){
    super(props);
    this.hayimagen = this.hayimagen.bind(this);
    
  }


  hayimagen(){
    if (this.props.choice.value!==null){
      return  <img src={this.props.choice.value} width="250px" height="200px" />
    }
    else return
  }

 
  

  render(){
    
    return (
        <div>
        
        <table className="table"> 
            <tr>
              <td>
                 <button className="answerQuestion" onClick={this.props.onNextPicture}>UP</button>
              </td>
             
            </tr>

            <tr>
              <td>
                {this.hayimagen()}
              </td>
            
            </tr>

             <td>
                <button className="answerQuestion" onClick={this.props.onNextPicture}>DOWN</button>
              </td>
          </table>    
       </div>
    );
  }
}