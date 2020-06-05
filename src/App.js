import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';
import './App.css';
import HomeScreen from './HomeScreen';
import BirthdayScreen from './BirthdayScreen';
import NavBar from './components/NavBar';

export default class App extends React.Component{

  state = {villagers: "", villager:""};

  async componentDidMount() {
  const res = await axios.get("http://acnhapi.com/v1/villagers");

  const villagers = Object.values(res.data);

  villagers.sort((a,b) =>{
      if(a.name["name-USen"] > b.name["name-USen"]) return 1
      if(a.name["name-USen"] < b.name["name-USen"]) return -1
      return 0;
  });

  this.setState({villagers: villagers});
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

