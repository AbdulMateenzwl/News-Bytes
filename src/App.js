import './App.css';


import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import Spinner from './componants/Spinner';

export default class App extends Component {
  
  render() {
    return (
      <div >
        <Navbar/>
        <News pageSize={5}/>
      </div>
    )
  }
}
