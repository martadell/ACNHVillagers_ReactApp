import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';
import BirthdayScreen from './components/BirthdayScreen';
import VillagerCard from './components/VillagerCard';

export default class App extends React.Component{


  render() {
    return(
      <Router>
        <div>      
          <h1>Animal Crossing New Horizons Villagers Archive</h1>
          <nav>
            <ul>
              <li><a href="/"><span role="img" aria-label="house">🏠</span> Home</a></li>
              <li><a href="/birthday"><span role="img"aria-label="birthday cake">🎂</span> Today's birthday</a></li>
            </ul>
          </nav>
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

