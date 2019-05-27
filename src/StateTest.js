import React from 'react';
import './App.css';

class StateTest   extends React.Component {


   state = {
      data: "*******"
   }

   val = "XXXXXXX";

   updateText(event) {
      this.setState(
         {
            data: event.target.value
         }
      );
      // this.val = event.target.value;
   }

   render() {
      console.log("Render method called......");

      return (

         <div>
            <br />
            <input type="text" onKeyUp={this.updateText.bind(this)} />
            <br /> 
            Typed Value : <h2>{this.state.data}</h2>
            <br />
            Non state variable: {this.val}
            <br />
            <div style={{color: this.state.data}}>My Color: {this.state.data}</div>
         </div>
      );
   }

}

export default StateTest;
