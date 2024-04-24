import React, {useState} from "react";
import Card from "./Card";

function CreateCard(data) {

  return (
    <Card
      key={data.id}
      id={data.id}
      img={data.img}
      title={data.title}
      description={data.description}
    />
  );
}

export default CreateCard;
