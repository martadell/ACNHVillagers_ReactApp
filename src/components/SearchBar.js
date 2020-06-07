import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./SearchBar.css";

export default function SearchBar() {
    const villagers = useSelector(state => state.villagers);
    let dropdown = useRef(null);
    let inputName = useRef(null);
  
    const filterNames = () => {
        let filter = inputName.current.value.toUpperCase();
        let names = dropdown.current.getElementsByClassName("name");
        for (let i = 0; i < names.length; i++) {
            let txtValue = dropdown.current.getElementsByClassName("name")[i].textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                names[i].classList.add("see");
                names[i].classList.remove("hid");
            } else {
                names[i].classList.add("hid");
                names[i].classList.remove("see");
            }
        }
    }
    
    const showList = () => {
        if(dropdown.current != null) {
            dropdown.current.classList.toggle("show");
        }
    }

    let villagersNamesList = villagers.map((villager) => {
        let url = "/details/"+villager.id;
        return <a key={villager.id} href={url} className="name" onClick={() => {
                sessionStorage.setItem("villagerId", villager.id);}}>
                <img src={villager.icon_uri} alt="villager-icon"/>
                    <p>{villager.name["name-USen"]}</p></a>
    });

    return(
        <div id="dropdown" onClick={showList}>
            <input type="text" ref={inputName} className="input" placeholder="Search by name..." 
            id="input" onChange={filterNames}/>
            <div className="dropdownContent" ref={dropdown}>
                {villagersNamesList} 
            </div>           
        </div>
    )

}