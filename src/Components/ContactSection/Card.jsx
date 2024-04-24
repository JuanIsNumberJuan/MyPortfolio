import React from "react";

function Card(data){
    return (
        <div className="ContactLinks"> 
            <a style={{ textDecoration: 'none' }} href={data.link}>{data.title}</a>
        </div>
    );
}

export default Card;