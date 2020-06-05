import React, { Component } from "react";
import VillagerDetails from "./components/VillagerCard";

//Note: The dates never repeat, everyday is only 1 villager's birthday, that's why it will only display 1 card
//(there are a few exceptions where it's nobody's, in that case it will be blank)

class BirthdayScreen extends Component {
  constructor(props) {
    super(props);
    this.birthdayVillager = {};
    this.date = new Date();
  }

  createCard() {
    let v=Array.from(this.props.villagers);
    let villager = "no";

    v.forEach((v) => {
      if (v.birthday === this.date.getDate().toString() + "/" + (this.date.getMonth() + 1).toString()) {
        villager = v;
        return;
      }
    });

    if (villager !== "no") {
      this.birthdayVillager = 
        <VillagerDetails key={villager.id} name={villager.name["name-USen"]} icon={villager.icon_uri}
          quote={villager["catch-phrase"]} birthday={villager["birthday-string"]} personality={villager.personality}
          specie={villager.species} gender={villager.gender}/>
    } else {
      this.birthdayVillager = 
          <p>No one <span role="img" aria-label="pensive face">😔</span> check again tomorrow if you can wish someone a happy
            birthday!</p>
    }
  }

render(){

    this.createCard();

    return (
      <div>
        <h2>
          <span role="img" aria-label="balloon">🎈</span>
          Today we're throwing a birthday party to:
          <span role="img" aria-label="balloon">🎈</span>
        </h2>
        {this.birthdayVillager}
      </div>
    );
  }
}

export default BirthdayScreen;
