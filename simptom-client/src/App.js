import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './pages/Home'

import './App.css';

class App extends Component {
  constructor () {
    super ()

    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component ={Home}/>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps)(App);
