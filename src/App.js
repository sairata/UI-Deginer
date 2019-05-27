import React from 'react';
import './App.css';
import Select from './Select';
import StateTest from './StateTest';
import TextEdit from './TextEdit';
import Counter from './Counter';


import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
 

const branches = [
  {key: 1, value: "red"},
  {key: 2, value: "blue"},
  {key: 3, value: "green"},
  {key: 4, value: "yellow"}
]

const employees = [
  {key: 1, value: "Radhakanta"},
  {key: 2, value: "Sairata"},
  {key: 3, value: "Monoj"},
  {key: 4, value: "Harish"}
]
class App extends React.Component {

  render() {
    return (

      <div>
      <Select data={ branches}/>
      <Select data={employees}/> 
      <StateTest /><br/>
      <TextEdit /><br/>
      <Counter />
      <Router >
        <Route exact path="/StateTest" component={StateTest} />
      </Router>

      </div>
  

    );
  }
  
}

export default App;
