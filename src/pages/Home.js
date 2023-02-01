import React from 'react'
import "./Home.css";
import video2 from '../assets/video2.mp4';
import Cards from '../cards/cards';
import { Videos } from '../cards/cards';


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
      <div className='video-container'>
          <video src={video2} autoPlay loop muted style={{width: '100%',height: '100vh'}} />
          <h1>Armin productions</h1>
          <p>2023</p>
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
  
      </div>
    )
  }

export default Home; 