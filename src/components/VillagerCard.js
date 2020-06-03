import React from 'react';
import Highlight from './Highlight';

class VillagerCard extends React.Component{ 
    render() {
        return(
            <div className = "villageCard">
                <div>      
                <h3>{this.props.name}</h3>
                <img src={this.props.icon} alt="villager-icon "></img>
            </div>
                    <p className= "quote">&quot;{this.props.quote}&quot;</p>              
                    <p>Birthday: {this.props.birthday} |                 
                    Personality: <Highlight personality={this.props.personality}/> | 
                    Specie: <Highlight specie={this.props.specie}/> | 
                    Gender: <Highlight gender ={this.props.gender}/>
                    </p>
                <div>

                </div>
            </div>
        );
    };
}

export default VillagerCard;