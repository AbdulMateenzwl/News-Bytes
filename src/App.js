import './App.css';
import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import { Switch, Route } from 'react-router-dom';
export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"  >
            <News key="general" pageSize={this.pageSize} country="in" category="health" />
          </Route>
          <Route exact path="/business"  >
            <News key="business" pageSize={this.pageSize} country="in" category="business" />
          </Route>
        </Switch>
        {/* <News  pageSize={this.pageSize} country="in" category="science"  /> */}
      </div>
    )
  }
}
