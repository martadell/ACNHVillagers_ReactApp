import React from 'react';

class VillagerPrev extends React.Component{ 
    
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className = "villagerPrev">                
                <h3>{this.props.name}</h3>                
                <img src={this.props.icon} alt="villager-icon "></img>
            </div>
        );
    };
}

export default VillagerPrev;