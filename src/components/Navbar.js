import React, {useState} from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";
import Dropdown from "./dropdown";
import Dropdown2 from "./dropdown2";
import Bee from './assets/images/bee (1).png'


function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(true);
        }
    };

    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    };
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Wildbienennisthilfe <img src={Bee} alt='Bee' width={50} height={50}/>
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
                    <li
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    className='nav-item'
                    >
                        <Link to= "/about" className="nav-links" onClick={closeMobileMenu}>
                            Die Seminarfacharbeit
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item2'
                        onMouseEnter={onMouseEnter2}
                        onMouseLeave={onMouseLeave2}
                    >
                        <Link to= "/entstehung" className="nav-links" onClick={closeMobileMenu}>
                            Unser Projekt
                        </Link>
                        {dropdown2 && <Dropdown2/>}
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar