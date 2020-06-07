import axios from 'axios';

const fetchVillagers = async () => {
    const res = await axios.get("https://acnhapi.com/v1/villagers");
  
    const villagers = Object.values(res.data);
  
    villagers.sort((a,b) =>{
        if(a.name["name-USen"] > b.name["name-USen"]) return 1
        if(a.name["name-USen"] < b.name["name-USen"]) return -1
        return 0;
    });

    return villagers;
}

export default fetchVillagers;
  