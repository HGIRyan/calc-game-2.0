import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css'
import { createBrowserHistory } from 'history';

import { NoDiv } from './wrapper'
import Levelplay from './components/Levelplay'
import Home from './components/Home'
import Create from './components/Create'
const history = createBrowserHistory();

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
        <NoDiv>
          <button onClick={() => history.goBack()}>Back</button>
          <button onClick={() => history.goForward()}>Forward</button>
        </NoDiv>
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
