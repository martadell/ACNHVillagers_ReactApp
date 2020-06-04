import React from 'react';
import './NavBar.css'

class NavBar extends React.Component{ 
    render() {
        return(
            <nav>
                <ul>
                <li><a href="/"><span role="img" aria-label="house">🏠</span> Home</a></li>
                <li><a href="/birthday"><span role="img"aria-label="birthday cake">🎂</span> Today's birthday</a></li>
                </ul>
            </nav>
        );
    };
}

export default NavBar;