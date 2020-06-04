import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomeScreen from './HomeScreen';
import BirthdayScreen from './BirthdayScreen';
import VillagerCard from './components/VillagerCard';
import NavBar from './components/NavBar';

export default class App extends React.Component{


  render() {
    return(
      <Router>
        <div>
          <h1>Animal Crossing New Horizons Villagers Archive</h1>
          <NavBar/>
        </div>
        <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/birthday" component={BirthdayScreen}/>
        <Route exact path="/details"/>
        </Switch>
      </Router>
    )
  }
}

