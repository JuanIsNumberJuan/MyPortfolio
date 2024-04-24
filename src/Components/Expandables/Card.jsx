import React, {useState} from "react";
import Img from "./Image";
import Title from "./Title";
import Description from "./Description";


function card(data) {
  const [isActive, setIsActive] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  
  const handleClick = (event) =>{
    const clickedCard = event.currentTarget;
    const cards = document.getElementsByClassName('cards');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i] === clickedCard) {
        if(cards[i].classList.contains('inactive') || !cards[i].classList.contains('active')){
          setIsActive(true);
          setIsInactive(false);
          cards[i].classList.remove('inactive');
          cards[i].classList.add('active');
        }
        else{
          setIsActive(false);
          setIsInactive(true);
          cards[i].classList.remove('active');
          cards[i].classList.add('inactive');
        }
      }else{
        cards[i].classList.remove('active');
        cards[i].classList.add('inactive');
      }
    }

    let allInactive = true;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('active')) {
        allInactive = false;
        break;
      }
    }
    // Remove class if all cards are inactive
    if (allInactive) {
      for (let i = 0; i < cards.length; i++) {
       cards[i].classList.remove('active', 'inactive');
      }
      setIsActive(false); // Update state to indicate no card is active
      setIsInactive(false);
    }
  }
  return (
    <div className = {`cards ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`} onClick={handleClick}>
      <Title title={data.title} />
      <div className="Data">
        <Img img={data.img} />
        <Description description={data.description} />
      </div>
    </div>
  );
}


export default card;
