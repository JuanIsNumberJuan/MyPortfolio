import React from "react";
import Card from "./Card";


function CreateCard(data) {
 //id = {`#slide${data.id}`}
  return (
    <div className="CardContainer" id = {`slide${data.id}`}>
        <Card
            key={data.id}
            id={data.id}
            img={data.img}
            title={data.title}
            description={data.description}
        />
    </div>
  );
}

export default CreateCard;
