import React, { Component } from "react";
import axios from "axios";
import "../style.css";
import VillagerCard from "./VillagerCard";

//Note: The dates never repeat, everyday is only 1 villager's birthday, that's why it will only display 1 card
//(there are a few exceptions where it's nobody's, in that case it will be blank)

class BirthdayScreen extends Component {
  state = { birthdayVillager: "" };

  async componentDidMount() {
    const res = await axios.get("http://acnhapi.com/v1/villagers");
    const villagers = Object.values(res.data);
    let villager = "no";

    const date = new Date();

    villagers.forEach((v) => {
      if (
        v.birthday ===
        date.getDate().toString() + "/" + (date.getMonth() + 1).toString()
      ) {
        villager = v;
        return;
      }
    });

    let birthdayVillager;

    if (villager !== "no") {
      birthdayVillager = (
        <VillagerCard
          key={villager.id}
          name={villager.name["name-USen"]}
          icon={villager.icon_uri}
          quote={villager["catch-phrase"]}
          birthday={villager["birthday-string"]}
          personality={villager.personality}
          specie={villager.species}
          gender={villager.gender}
        />
      );
    } else {
      birthdayVillager = (
        <div className="villageCard">
          <p>
            No one ): check again tomorrow if you can wish someone a happy
            birthday!
          </p>
        </div>
      );
    }

    this.setState({ birthdayVillager: birthdayVillager });
  }

  render() {
    return (
      <div>
        <h2>
          <span role="img" aria-label="balloon">
            🎈
          </span>{" "}
          Today we're throwing a birthday party to:{" "}
          <span role="img" aria-label="balloon">
            🎈
          </span>
        </h2>
        {this.state.birthdayVillager}
      </div>
    );
  }
}

export default BirthdayScreen;
