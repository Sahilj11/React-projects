import { useState } from "react";
export function Greeting(){
    return(
        <Chemist people={people}/>
    )
}
function Chemist(props){
    const chemist = props.people.map((item)=>item.id)
    return(
        <ul>
        <ChemistId items={chemist}/>
        </ul>
    )
}
function ChemistId(props){
    return (
        <li key={props.items}>{props.items}</li>
    )
}