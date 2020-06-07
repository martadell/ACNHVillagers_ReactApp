import React from "react";
import { useSelector } from "react-redux";
import VillagerDetails from "./components/VillagerCard";

export default function DetailsScreen() {

  //default values
  let detailsVillager = {};   // detailsVillager as a "component" (what we'll export) = for now empty    
  let villager = {};          // villager, element from the api we'll use = for now empty
  let villagerId = -1;        //the id from the villager we'll show = for now -1 (no one)
  const villagers = useSelector(state => state.villagers); //villagers (from api), where we'll get our villager

  //1. take de id from sessionStorage and take out the villager with that id
  if(sessionStorage.getItem("villagerId")) { //if there's something on sessionStorage
    villagerId = sessionStorage.getItem("villagerId"); //it will become the new villagerId

    villagers.forEach((v) => {
      if (v.id.toString() === villagerId) { //check if the ids match
        villager = v; //if so save it becomes the villager we'll show
        return;
      }
    });
    //sessionStorage.removeItem("villagerId"); //NOTE: for some reason if I try to remove the item from
                                               //sessionStorage it won't be saved on the variable eventhough 
                                               //I delete it after passing the value ?? ): so it will stay
                                               //like that, I wanted to delete it tho in case someone goes
                                               //here by typing the adress instead of selecting an item
  }
  
  //2. create the element we'll render
  if (Object.entries(villager).length !== 0) { //if we have the id matched villager
    detailsVillager = 
      <VillagerDetails key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
        quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
        specie={villager.species} gender={villager.gender}/>
  } else { //if not (in case someone goes to /details by typing it on the bar, 
           //not by picking an element from the HomeScreen list)
    detailsVillager = <p>Whoops! <span role="img" aria-label="grimancing face">😬</span>
    you may got here by accident, go back <a href="/">home</a> and select a villager
    to check their details!</p>
  }

    return (
      <div>
        {detailsVillager}
      </div>
    );
}