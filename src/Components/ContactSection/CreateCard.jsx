import React, {useState} from "react";
import Card from "./Card";

function CreateCard(data){
    return(
        <Card
        key={data.id}
        id={data.id}
        title={data.title}
        link={data.link}
    />
    );
}

export default CreateCard;

