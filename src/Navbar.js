import React, {useState, useEffect} from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';
import Logo from "./assets/logo.png"
import Spotify from "./assets/spotify.png"
import Instagram from "./assets/insta.png"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src = {Logo} />
                        {/* <img src ={Spotify} /> */}
                </Link>
                <div className="Logos" onClick={handleClick}>
                    <a href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x">
                        <img  src = {Spotify} />  
                    </a>
                    <a href="https://www.instagram.com/escape_to_safety/">
                        <img className='insta' src = {Instagram} />
                    </a>

                        {/* <img  src = {Spotify} /> */}
                    {/* <i className={click ? "fas fa-times" : "fas fa-bars"}/> */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar