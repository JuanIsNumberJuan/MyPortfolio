import { useState } from 'react'
import './App.css'
import Header from './Static/Header';
import AboutMe from './AboutMeSection/AboutMe';
import Projects from './Expandables/ProjectsSection/Projects';
import Skills from './Expandables/SkillsSection/Skills';
import Contact from './ContactSection/Contact';
import Footer from './Static/Footer';

function App() {

  return (
    <div className = "background">
      <Header/>
      <div>
        
        <div className='body'>
        <div className = "bubbles">
          <span style = {{"--i" : 25}}></span>
          <span style = {{"--i" : 18.3}}></span>
          <span style = {{"--i" : 12.9}}></span>
          <span style = {{"--i" : 16.3}}></span>
          <span style = {{"--i" : 7.6}}></span>
          <span style = {{"--i" : 20.7}}></span>
          <span style = {{"--i" : 5.2}}></span>
          <span style = {{"--i" : 18.9}}></span>
          <span style = {{"--i" : 23.6}}></span>
          <span style = {{"--i" : 8.8}}></span>
          <span style = {{"--i" : 19.8}}></span>
          <span style = {{"--i" : 16.1}}></span>
          <span style = {{"--i" : 15.3}}></span>
          <span style = {{"--i" : 24.2}}></span>
          <span style = {{"--i" : 6.7}}></span>
          <span style = {{"--i" : 21.6}}></span>
          <span style = {{"--i" : 7.4}}></span>
          <span style = {{"--i" : 19.8}}></span>
          <span style = {{"--i" : 9.3}}></span>
          <span style = {{"--i" : 18.1}}></span>
          <span style = {{"--i" : 14.1}}></span>
          <span style = {{"--i" : 8.4}}></span>
          <span style = {{"--i" : 7.6}}></span>
          <span style = {{"--i" : 18.7}}></span>
          <span style = {{"--i" : 7.6}}></span>
          <span style = {{"--i" : 20.4}}></span>
          <span style = {{"--i" : 17.7}}></span>
          <span style = {{"--i" : 16.1}}></span>
          <span style = {{"--i" : 9.4}}></span>

          <span style = {{"--i" : 24.2}}></span>
          <span style = {{"--i" : 18.1}}></span>
          <span style = {{"--i" : 12.4}}></span>
          <span style = {{"--i" : 16.8}}></span>
          <span style = {{"--i" : 7.3}}></span>
          <span style = {{"--i" : 22.7}}></span>
          <span style = {{"--i" : 8.2}}></span>
          <span style = {{"--i" : 14.9}}></span>
          <span style = {{"--i" : 22.6}}></span>
          <span style = {{"--i" : 8.7}}></span>
          <span style = {{"--i" : 18.3}}></span>
          <span style = {{"--i" : 16.4}}></span>
          <span style = {{"--i" : 15.7}}></span>
          <span style = {{"--i" : 23.2}}></span>
          <span style = {{"--i" : 7.7}}></span>
          <span style = {{"--i" : 24.1}}></span>
          <span style = {{"--i" : 5.4}}></span>
          <span style = {{"--i" : 13.8}}></span>
          <span style = {{"--i" : 19.3}}></span>
          <span style = {{"--i" : 18.8}}></span>
          <span style = {{"--i" : 14.7}}></span>
          <span style = {{"--i" : 7.4}}></span>
          <span style = {{"--i" : 14.6}}></span>
          <span style = {{"--i" : 13.7}}></span>
          <span style = {{"--i" : 17.6}}></span>
          <span style = {{"--i" : 23.4}}></span>
          <span style = {{"--i" : 17.3}}></span>
          <span style = {{"--i" : 12.7}}></span>
          <span style = {{"--i" : 9.9}}></span>
          <span style = {{"--i" : 24.8}}></span>
          <span style = {{"--i" : 14.7}}></span>
          <span style = {{"--i" : 16.9}}></span>
          <span style = {{"--i" : 12.3}}></span>
          <span style = {{"--i" : 7.9}}></span>
          <span style = {{"--i" : 24.7}}></span>
          <span style = {{"--i" : 5.6}}></span>
          <span style = {{"--i" : 12.9}}></span>
          <span style = {{"--i" : 20.6}}></span>
          <span style = {{"--i" : 13.8}}></span>
          <span style = {{"--i" : 16.4}}></span>
          <span style = {{"--i" : 12.1}}></span>
          <span style = {{"--i" : 16.3}}></span>
          <span style = {{"--i" : 20.2}}></span>
          <span style = {{"--i" : 9.7}}></span>
          <span style = {{"--i" : 17.6}}></span>
          <span style = {{"--i" : 12.4}}></span>
          <span style = {{"--i" : 19.3}}></span>
          <span style = {{"--i" : 8.3}}></span>
          <span style = {{"--i" : 15.1}}></span>
          <span style = {{"--i" : 19.1}}></span>
          <span style = {{"--i" : 9.4}}></span>
          <span style = {{"--i" : 13.6}}></span>
          <span style = {{"--i" : 18.2}}></span>
          <span style = {{"--i" : 8.4}}></span>
          <span style = {{"--i" : 17.4}}></span>
          <span style = {{"--i" : 12.3}}></span>
          <span style = {{"--i" : 16.6}}></span>
          <span style = {{"--i" : 15.3}}></span>

        </div>
    
     
      <section id = "AboutMe"> 
        <AboutMe/>

      </section>

      <section id = "Projects"> 
        <Projects/>
      </section>

      <section id = "Skills"> 
        <Skills/>
      </section>

      <section id = "Contact"> 
        <Contact/>
      </section>
      </div>

      
      
      <Footer/>
      </div>
    </div>
  )
}

export default App;
