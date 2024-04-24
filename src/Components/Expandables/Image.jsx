import React from "react";

function image(data) {
  return (
    <div>
      <img className="Image" src = {data.img}></img>
    </div>
    );
}
export default image;
