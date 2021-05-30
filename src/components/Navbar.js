import React, {useState} from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Bienenhotel <img src='https://image.flaticon.com/icons/png/512/517/517563.png' alt='Bee' width={50} height={50}/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to= "/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= "/about" className="nav-links" onClick={closeMobileMenu}>
                            Über uns
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= "/project" className="nav-links" onClick={closeMobileMenu}>
                            Das Projekt
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar