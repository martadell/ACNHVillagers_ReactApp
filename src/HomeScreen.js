import React from 'react';
import VillagerPrev from './components/VillagerPrev';
import { useSelector} from "react-redux";

export default function HomeScreen() {
    const vs = useSelector(state => state.villagers); //get the villager's list

    let villagersList = vs.map((villager) => { //for each villager on the list create its displaying element
        return( //(had to put it inside a div in order to use the onclick)
            <div key={villager.id} onClick={() => {
              sessionStorage.setItem("villagerId", villager.id);
              window.location = "./details"
            }}>
                <VillagerPrev name={villager.name["name-USen"]} icon={villager.icon_uri}
                quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
                specie={villager.species} gender={villager.gender}/>
            </div>
        );
    });

    return(
        <main>
            {villagersList} 
        </main>
        )
}