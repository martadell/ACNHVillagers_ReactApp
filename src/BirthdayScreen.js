import React from "react";
import VillagerDetails from "./components/VillagerCard";
import { useSelector } from "react-redux";

//Note: The dates never repeat, everyday is only 1 villager's birthday, that's why it will only display 1 card
//(there are a few exceptions where it's nobody's, in that case it will be blank)
export default function BirthdayScreen() {

  //default values
  let birthdayVillager = {};  // birthdayVillager as a "component" (what we'll export) = for now empty
  let villager = "no";        // villager, element from the api we'll use = for now no birthdayVillager
  let date = new Date();      // date = today
  let v = useSelector(state => state.villagers); //villagers (from api), where we'll get our villager

   //1. check if there's a birthday today
  v.forEach((v) => {
    if (v.birthday === date.getDate().toString() + "/" + (date.getMonth() + 1).toString()) {
      villager = v; //if so save it becomes the villager we'll show
      return;
    }
  });

  //2. create the element we'll render
  if (villager !== "no") { //if there's a birthday villager
    birthdayVillager = 
      <VillagerDetails key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
        quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
        specie={villager.species} gender={villager.gender}/>
  } else { //if not
    birthdayVillager = 
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
        {birthdayVillager}
      </div>
    );
}
