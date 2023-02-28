import React from 'react'
import "./Home.css";
import video2 from '../assets/video2.mp4';
import Cards from '../cards/cards';
import { Videos } from '../cards/cards';
import Bahar from "../assets/Bahar.jpg"


function Home () {
    return (
        <>
        <MainSection />
        <Cards />
        <Videos />
        </>
    )
}


function MainSection(){
    return (
      <div className='head-text'>
          <img className='img' src={Bahar} />
          <div className='text-on-image'>
              <h1 className='text'>ESCAPE TO SAFETY</h1>
              <p className='bottom'>EXILE DIARIES</p>
          </div>
        
      </div>
    )
  }

export default Home; 