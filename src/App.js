import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css'

import Levelplay from './components/Levelplay'
import Home from './components/Home'
import Create from './components/Create'

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={Create} />
          <Route path='/level/:level' component={Levelplay} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state };
}
export default withRouter(
  connect(mapStateToProps, {})(App)
);
