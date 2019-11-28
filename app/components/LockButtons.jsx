import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './../assets/scss/quiz.scss';



export default class LockButtons extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
   
    return (
       <div className="table">
        
        <table> 
         <tr>
              <td align="center">
              <button class="button_lock"
                onClick={ () => {
                if (this.props.question.choices[this.state.current_choice_index].id===this.props.respuestai){
                  return this.setState({answered:true});

                  }else{
                    return this.setState({answered:false});
                  }
                
                }}>
                <Spinner animation="border" role="success"/>
                <img src="./../assets/images/lock.png" width="80px" height="100px" />
                <p/>Try!!
                </button>

                 
              </td>
             
            </tr>

        </table> 
      </div>
    );
  }
}