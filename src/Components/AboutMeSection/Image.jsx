import React from "react";

function image(data) {
  //const imgSrc = `/public/Images/${data.img}`;
  //console.log("Image src:", imgSrc);
  return (
    <div>
      <img className="AboutMeImage" src = {`/assets/${data.img}`}></img>
    </div>
    );
}
export default image;