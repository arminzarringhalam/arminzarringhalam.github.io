import React from 'react'
import './cards.css';

function Cards () {
    return (
        <div>
             <div className="our_story">
            <h1 className='heading'> Our Story </h1>
            <p className='read_more'> Read more..</p>
            </div>

        <div className="our_story_paragraph">
            <h1 className='heading_3'> Welcome to our podcast, where we showcase the personal stories of Iranians who have experienced the cruelty of the Islamic Regime and have had to leave their home country in search of safety and freedom. These individuals have bravely shared their experiences with us, providing a unique and personal perspective on life in Iran under the current regime. Through their stories, we hope to shed light on the challenges and struggles that many Iranians face, as well as the resilience and determination that has allowed them to overcome these obstacles and create a better life for themselves. Join us as we listen to and learn from these inspiring individuals.
 </h1>
        </div>
        </div>
       
    )
}

function Videos  () {
    return (
        <div>

            <div className='youtube'>
            <h1 className='heading_2'> Latest Youtube</h1>
            <iframe className='video_frame'
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/rEFc0AmmiGM`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
            
            </div>

            <div className='spotify'>
            <h1 className='heading'> Latest Spotify</h1>
            </div>

            <div className='mailing_list'>
            <h1> Join the mailing_list</h1>
            </div>

        </div>

    )
}

export default Cards; 
export {
    Videos
}