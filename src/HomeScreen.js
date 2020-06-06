import React from 'react';
import VillagerPrev from './components/VillagerPrev';
import { useSelector } from "react-redux";

export default function HomeScreen() {

    let v = useSelector(state => state.villagers);

    let villagersList = v.map((villager) => { //for each villager on the list create its displaying element
        return(
            <VillagerPrev key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
            quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
            specie={villager.species} gender={villager.gender}/>
        );
    });

    return(
        <main>
            {villagersList} 
        </main>
        )
}