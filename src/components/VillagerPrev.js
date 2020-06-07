import React from 'react';
import './VillagerPrev.css'

class VillagerPrev extends React.Component{ 
    render() {
        return(
            <div className = "villagerPrev">                
                <h3>{this.props.name}</h3>                
                <img src={this.props.icon} alt="villager-icon"/>
            </div>
        );
    };
}

export default VillagerPrev;