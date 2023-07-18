import './App.css';
import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" />} />
          </Routes>
        </Router>
        {/* <News pageSize={9} country="in" category="science" /> */}
      </div>
    )
  }
}
