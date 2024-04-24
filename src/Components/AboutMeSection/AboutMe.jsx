import React from "react";
import AboutMeData from "./AboutMeData";
import CreateCard from "./CreateCard";

function AboutMe(){

    const handleNavClick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.currentTarget.getAttribute('href').substring(1); // Get the target slide ID
        const targetSlide = document.getElementById(targetId); // Get the target slide element
        if (targetSlide) {
            const slider = targetSlide.closest('.slider'); // Find the slider container
            const slideOffsetLeft = targetSlide.offsetLeft; // Get the offset of the target slide
            if (slider) {
                slider.scrollLeft = slideOffsetLeft; // Scroll to the target slide's position
            }
        }
    }
    return (
        <div className="AboutMe">
            <h1>About</h1>
            <section className = "AboutMeContainer">
                <div className = "slider-wrapper">
                    <div className="slider">
                        {AboutMeData.map((data) => (
                            <CreateCard key={data.id} {...data} />
                         ))}
                    </div>
                    <div className="slider-nav">
                    {AboutMeData.map((data, index) => (
                    <a key={index} href={`#slide${data.id}`}onClick={handleNavClick}></a>
                    ))}
                 </div>
                </div>
                
            </section>
        </div>
    );


}

export default AboutMe;