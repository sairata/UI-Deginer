import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom'

class NavMenu extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="NavAbout">About</Link></li>
                </ul>
            </div>
        )
    }
}
export default NavMenu;