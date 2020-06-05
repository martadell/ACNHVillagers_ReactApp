import React, {Component} from 'react';
import VillagerPrev from './components/VillagerPrev';

class HomeScreen extends Component{

    constructor(props) {
        super(props);
        this.villagersList = [];
    }

    createList() {
        let v= Array.from(this.props.villagers);

        this.villagersList = v.map((villager) => {
            return(
                <VillagerPrev key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
                quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
                specie={villager.species} gender={villager.gender}/>
            );
        });
      }

    render(){

        this.createList();

        return(
            <main>
                {this.villagersList} 
            </main>
        )
    }
}
export default HomeScreen;