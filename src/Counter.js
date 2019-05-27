import React from 'react';
import './App.css';


class Counter extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        data: 0
     }
    };
    incrementer() {
        this.setState(
           {
            data: this.state.data +1
           }
        );
    }
    decrementer() {
        this.setState(
            {
                data: this.state.data -1
            }
        );
     }
     reset() {
        this.setState(
            {
                data: 0
            }
        );
     }
    render(){
        return(
            <div>
                
                <button onClick = {this.incrementer.bind(this)}>incrementer</button>
                <button  onClick={this.decrementer.bind(this)}>decrementer</button>
                <button onClick={this.reset.bind(this)} >reset</button>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default Counter;