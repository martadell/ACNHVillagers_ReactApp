import React from 'react';
import './NavBar.css';
import SearchBar from './SearchBar';

class NavBar extends React.Component{ 
    render() {
        return(
            <nav>
                <ul>
                <li><a href="/ACNHVillagers_ReactApp"><span role="img" aria-label="house">🏠</span> Home</a></li>
                <li><a href="/ACNHVillagers_ReactApp/birthday"><span role="img"aria-label="birthday cake">🎂</span> Today's birthday</a></li>
                <li><SearchBar/></li>
                </ul>
            </nav>
        );
    };
}

export default NavBar;