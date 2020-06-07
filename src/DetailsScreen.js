import React from "react";
import { useSelector } from "react-redux";
import VillagerDetails from "./components/VillagerCard";

export default function DetailsScreen() {

  //default values
  let detailsVillager = {};   // detailsVillager as a "component" (what we'll export) = for now empty    
  let villager = -1;          // villager, element from the api we'll use = for now empty
  const villagers = useSelector(state => state.villagers); //villagers (from api), where we'll get our villager

  const currentURL = window.location.href;            //current URL location
  const villagerId = currentURL.split("/").pop();   //extracting the last part (name)

  //1. get the villager with the name typed
villagers.forEach((v) => {
    if (v.id.toString() === villagerId) { //check if the names match
      villager = v; //if so save it becomes the villager we'll show
      return;
    }
  });

  //2. create the element we'll render
  if (villager.id > -1 && villager.id < 392) { //if we have the id matched villager
    detailsVillager = 
      <VillagerDetails key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
        quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
        specie={villager.species} gender={villager.gender}/>
  } 

    return (
      <>
        {detailsVillager}
      </>
    );
}