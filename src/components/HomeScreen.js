import React, {Component} from 'react';
import axios from 'axios';
import '../style.css';
import VillagerPrev from './VillagerPrev';

class HomeScreen extends Component{     
      
  state={villagersList: ""};

  async componentDidMount() {
    const res = await axios.get("http://acnhapi.com/v1/villagers");

    const villagers = Object.values(res.data);

    villagers.sort((a,b) =>{
        if(a.name["name-USen"] > b.name["name-USen"]) return 1
        if(a.name["name-USen"] < b.name["name-USen"]) return -1
        return 0;
    })

    let villagersList = villagers.map((villager) => {
        return(
            <VillagerPrev key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
            quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
            specie={villager.species} gender={villager.gender}/>
        );
    });

    this.setState({villagersList: villagersList});
  }

    render(){
        return(
            <main>
            {this.state.villagersList} 
            </main>
        )
    }
}

export default HomeScreen;