import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import loadVillagers from "./loadVillagers";
import './App.css';
import HomeScreen from './HomeScreen';
import BirthdayScreen from './BirthdayScreen';
import NavBar from './components/NavBar';

export default class App extends React.Component{

  state = {villagers: "", villager:""};

  async componentDidMount() {
  this.setState({villagers: await loadVillagers()});
}

  render() {
    return(
      <Router>
        <div>
          <h1>Animal Crossing New Horizons Villagers Archive</h1>
          <NavBar/>
        </div>
        <Switch>
        <Route exact path="/" render = {() => (<HomeScreen villagers = {this.state.villagers}/>)}/>
        <Route exact path="/birthday"  render = {() => (<BirthdayScreen villagers = {this.state.villagers}/>)}/>
        <Route exact path="/details"/>
        </Switch>
      </Router>
    )
  }
}

