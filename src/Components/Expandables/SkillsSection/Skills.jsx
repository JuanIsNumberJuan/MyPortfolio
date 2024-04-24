import React from "react";
import SkillData from "./SkillsData";
import CreateCard from "../CreateCard";

function Skills(){
    return (
        <div className = "Skills">
            <h1>Skills</h1>
            <div className = "Container">
                {SkillData.map(CreateCard)}
            </div>
            
        </div>
    );


}

export default Skills;


