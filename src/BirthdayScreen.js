import React from "react";
import { useSelector } from "react-redux";
import VillagerDetails from "./components/VillagerCard";

export default function BirthdayScreen() {

  //default values
  let birthdayVillagers = [];  // birthdayVillager as a "component" (what we'll export) = for now empty
  let bvillagers = [];          // villager, element from the api we'll use = for now empty
  const date = new Date();    // date = today
  const villagers = useSelector(state => state.villagers); //villagers (from api), where we'll get our villager



  //1. check if there's a birthday today
  villagers.forEach((v) => {
    if (v.birthday === date.getDate().toString() + "/" + (date.getMonth() + 1).toString()) {
      bvillagers.push(v); //if so save it becomes the villager we'll show
      return;
    }
  });

  //2. create the element we'll render
  if (bvillagers.length !== 0) { //if there's a birthday villager
  for(let i=0; i<bvillagers.length; i++) {
    let villager = bvillagers[i];
        birthdayVillagers.push(
      <VillagerDetails key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
        quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
        specie={villager.species} gender={villager.gender}/>)
  }
  } else { //if not
    birthdayVillagers = 
        <p>No one <span role="img" aria-label="pensive face">😔</span> check again tomorrow if you can wish someone a happy
          birthday!</p>
  }

    return (
      <div>
        <h2>
          <span role="img" aria-label="balloon">🎈</span>
          Today we're throwing a birthday party to:
          <span role="img" aria-label="balloon">🎈</span>
        </h2>
        {birthdayVillagers}
      </div>
    );
}
