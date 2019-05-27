import React from 'react';
import './App.css';

class Select extends React.Component {

  render() {
    return (

        
        <label>
        Pick your favorite flavor:
        <select >
            {this.props.data.map(({key, value}, rowIndex) => {
                return <option value={key} >{value}</option>
            }) }          
        </select>
      </label>
    );
  }
  
}

export default Select;
