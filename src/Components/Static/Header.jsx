import React from "react";

function Header(){
    return(
    <div className = "header">
        <a  href="#Home"className ="logo"> Home</a>
        <ul>
            <li><a href="#AboutMe">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>)

}

export default Header;