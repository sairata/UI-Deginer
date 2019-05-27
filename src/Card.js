import React from 'react';
import './App.css';

class Card extends React.Component {

    constructor(){
        this.state = {
            name: '',
            age: 0
        }
    }

  render() {
    return (
      <div className="card">
        {this.props.desc}

      </div>
    );
  }
  
}

export default Card;
