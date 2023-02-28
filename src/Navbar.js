import React, {useState, useEffect} from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';
import Logo from "./assets/logo.png"
import Spotify from "./assets/spotify.png"
import Instagram from "./assets/insta.png"
import Youtube from "./assets/youtube.png"
import Tiktok from "./assets/tiktok.png"

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
                <div className= "flex-wrapper" onClick={handleClick}>
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <img src = {Logo} />
                        {/* <img src ={Spotify} /> */}
                </Link>
                    <div className="image-wrapper">
                        <a href="https://open.spotify.com/show/2J80XnxhOKDKSKc2wCEeES">
                            <img  src = {Spotify} class="scale-image"/>  
                        </a>
                    </div>
                    <div class="image-wrapper">
                        <a href="https://www.instagram.com/escape_to_safety/">
                            <img src = {Instagram} class="scale-image"/>
                        </a>
                    </div>
                    <div class="image-wrapperY">
                        <a href="https://youtube.com/@escapetosafety">
                            <img src = {Youtube} class="scale-image"/>
                        </a>
                    </div>
                    <div class="image-wrapperY">
                        <a href="https://www.tiktok.com/@escapetosafety?_t=8a6YYLDTCOz&_r=1">
                            <img src = {Tiktok} class="scale-image"/>
                        </a>
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar