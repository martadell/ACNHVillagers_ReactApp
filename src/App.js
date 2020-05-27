import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends React.Component{
  
  state={imageURL: ""};

  async componentDidMount() {
    const res = await axios.get("http://acnhapi.com/v1/villagers");
    
    console.log(Object.values(res.data)); //per fer un array per manegar-ho millor (no sé si ho faré servir)
    this.setState({imageURL: res.data.ant00.icon_uri});
  }

  render() {
    return(
      <div>
        <h1>Hola</h1>
        {this.state.imageURL !== "" ? <img src={this.state.imageURL}></img>: null}
      </div>
    )
  }
}

