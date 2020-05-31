import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';

export default class App extends React.Component{


  render() {
    return(
      <Router>
        <div>      
        <h1>Animal Crossing New Horizons Villagers List</h1>
        </div>
        <HomeScreen/>
      </Router>
    )
  }
}

