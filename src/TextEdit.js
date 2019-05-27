import React from 'react';
import './App.css';


class TextEdit extends React.Component {
    state = {
        data: ""
     }
    showText(event) {
        this.setState(
           {
              data: event.target.value
           }
        );
    }
    render(){
        return(
            <div>
                Type here<input type="text" onKeyUp={this.showText.bind(this)} />
                <h2>{this.state.data}</h2>
            </div>
        )
    }
}

export default TextEdit;