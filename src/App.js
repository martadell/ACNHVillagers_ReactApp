import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadVillagers } from "./actions/villagers";
import HomeScreen from './HomeScreen';
import BirthdayScreen from './BirthdayScreen';
import DetailsScreen from './DetailsScreen';
import NavBar from './components/NavBar';
import './App.css';

const useLoadVillagers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVillagers());
  }, [])
};

const useLoadingOrError = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  return [loading, error];
}

function App() {
  useLoadVillagers();
  const [loading, error] = useLoadingOrError();
  const vs = useSelector(state => state.villagers); //get the villager's list

if (loading) {
  return (
    <div className="info">
      <img src="https://i.pinimg.com/originals/47/2f/5f/472f5f292d3cd67c1748aa4502ade31b.gif" alt="loading train"/>
      <h2>Now loading...</h2>
    </div>
  );
}
if (error) {
  return <div className="info">
    <h2>{error.toString()}</h2>
    </div>;
}

let villagersRoutes= vs.map((villager) => { //for each villager on the list create its route element
return(
    <Route exact path={"/details/"+ villager.id} component={DetailsScreen} key={villager.id}/>
  );
});

return (
  <Router>
    <div>
      <h1>Animal Crossing New Horizons Villagers Archive</h1>
      <NavBar/>
    </div>
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/birthday" component={BirthdayScreen}/>
      {villagersRoutes}
      <Route path="/" render = {() => <div>
        <p>Whoops! wrong path <span role="img" aria-label="grimancing face">😬</span> make
        make sure you typed it right or go back <a href="/">home</a> and select a villager
        to check their details!</p>
      </div>}/>
    </Switch>
  </Router>
);
}

export default App;

