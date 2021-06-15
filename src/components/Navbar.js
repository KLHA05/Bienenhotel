import React, {useState} from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";
import Dropdown from "./dropdown";
import Dropdown2 from "./dropdown2";


function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

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
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Wildbienennisthilfe <img src='https://image.flaticon.com/icons/png/512/517/517563.png' alt='Bee' width={50} height={50}/>
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
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to= "/project" className="nav-links" onClick={closeMobileMenu}>
                            Unser Projekt
                        </Link>
                        {dropdown && <Dropdown2/>}
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar