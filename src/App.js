import './App.css';
import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import { Switch, Route } from 'react-router-dom';
export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"  >
            <News key="general" pageSize={9} country="in" category="health" />
          </Route>
          <Route exact path="/business"  >
            <News key="business" pageSize={9} country="in" category="business" />
          </Route>
        </Switch>
        {/* <News  pageSize={9} country="in" category="science"  /> */}
      </div>
    )
  }
}
