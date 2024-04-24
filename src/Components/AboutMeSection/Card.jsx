import React, {useState} from "react";
import Img from "./Image";
import Title from "./Title";
import Description from "./Description";


function card(data) {

  //className="slider-animation"
    return (
          <div className="AboutMeCard" id={data.id}>
            
            <Title title={data.title} />
            <Description description={data.description} />
            <Img img={data.img} />
            
            
          </div>
    );
}
    
    
export default card;