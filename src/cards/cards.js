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
            <h1 className='heading_2'> Extra Stuff... </h1>
        </div>
        </div>
       
    )
}

function Videos (){
    return (
        <div>

            <div className='youtube'>
            <h1 className='heading_2'> Latest Youtube</h1>
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