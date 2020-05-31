import React, {Component} from 'react';
import axios from 'axios';
import '../style.css';
import Highlight from './Highlight';

class HomeScreen extends Component{     
      
  state={imageURL: ""};

  async componentDidMount() {
    const res = await axios.get("http://acnhapi.com/v1/villagers");

    const villagers = Object.values(res.data);

    let villagersList = villagers.map((villager) => {
        return(
            <div key={villager.id} className = "villageCard">
                <div>      
                <h3>{villager.name["name-USen"]}</h3>
                <img src={villager.icon_uri} alt="villager-icon "></img>
            </div>
                    <p className= "quote">&quot;{villager["catch-phrase"]}&quot;</p>              
                    <p>Birthday: {villager["birthday-string"]} |                 
                    Personality: <Highlight personality={villager.personality}/> | 
                    Specie: <Highlight specie={villager.species}/> | 
                    Gender: <Highlight gender = {villager.gender}/></p>
                <div>

                </div>
            </div>
        );
    });

    this.setState({villagersList: villagersList});
  }

    render(){
        return(
            <div>
            {this.state.villagersList} 
            </div>
        )
    }
}

export default HomeScreen;