import './App.css';


import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';

export default class App extends Component {
  
  render() {
    return (
      <div >
        <Navbar/>
        <News/>
      </div>
    )
  }
}
