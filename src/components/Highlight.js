import React from 'react';

let pList = ["Cranky", "Jock", "Lazy", "Normal", "Peppy", "Smug", "Snooty", "Uchi"];
let sList = ["Alligator", "Anteater", "Bear", "Bird", "Bull", "Cat", "Chicken", "Cow", "Cub", "Deer", "Dog", "Duck",
"Eagle", "Elephant", "Frog", "Goat", "Gorilla", "Hamster", "Hippo", "Horse", "Kangaroo", "Koala", "Lion", "Monkey",
"Mouse", "Octopus", "Ostrich", "Penguin", "Pig", "Rabbit", "Rhino", "Sheep", "Squirrel", "Tiger", "Wolf"];

class Highlight extends React.Component {
    render() {
        if(this.props.personality != null) {
    return (
        <span className = {this.props.personality === pList[0] ? pList[0] : this.props.personality === pList[1] ? pList[1] : 
        this.props.personality === pList[2] ? pList[2] : this.props.personality === pList[3] ? pList[3] : 
        this.props.personality === pList[4] ? pList[4] : this.props.personality === pList[5] ? pList[5] : 
        this.props.personality === pList[6] ? pList[6] : pList[7]}> {this.props.personality}</span>
        );
    } if (this.props.gender != null) {
        return <span className = {this.props.gender === "Male" ? "male" : "female"}> {this.props.gender}</span>;
    } if (this.props.specie != null) {
        return (
            <span className = {this.props.specie === sList[0] ? sList[0] : this.props.specie === sList[1] ? sList[1] : 
            this.props.specie === sList[2] ? sList[2] : this.props.specie === sList[3] ? sList[3] : 
            this.props.specie === sList[4] ? sList[4] : this.props.specie === sList[5] ? sList[5] : 
            this.props.specie === sList[6] ? sList[6] : this.props.specie === sList[7] ? sList[7] : 
            this.props.specie === sList[8] ? sList[8] : this.props.specie === sList[9] ? sList[9] : 
            this.props.specie === sList[10] ? sList[10] : this.props.specie === sList[11] ? sList[11] : 
            this.props.specie === sList[12] ? sList[12] : this.props.specie === sList[13] ? sList[13] : 
            this.props.specie === sList[14] ? sList[14] : this.props.specie === sList[15] ? sList[15] : 
            this.props.specie === sList[16] ? sList[16] : this.props.specie === sList[17] ? sList[17] : 
            this.props.specie === sList[18] ? sList[18] : this.props.specie === sList[19] ? sList[19] : 
            this.props.specie === sList[20] ? sList[20] : this.props.specie === sList[21] ? sList[21] : 
            this.props.specie === sList[22] ? sList[22] : this.props.specie === sList[23] ? sList[23] : 
            this.props.specie === sList[24] ? sList[24] : this.props.specie === sList[25] ? sList[25] : 
            this.props.specie === sList[26] ? sList[26] : this.props.specie === sList[27] ? sList[27] : 
            this.props.specie === sList[28] ? sList[28] : this.props.specie === sList[29] ? sList[29] : 
            this.props.specie === sList[30] ? sList[30] : this.props.specie === sList[31] ? sList[31] : 
            this.props.specie === sList[32] ? sList[32] : this.props.specie === sList[33] ? sList[33] : 
            sList[34]}> {this.props.specie}</span>
            );
        }
    }
}

export default Highlight;