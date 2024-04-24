import React from "react";
import ContactData from "./ContactData";
import CreateCard from "./CreateCard";


function Contact(){
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <div className = "Container">
                {ContactData.map(CreateCard)}
            </div>
        </div>
    );


}

export default Contact;