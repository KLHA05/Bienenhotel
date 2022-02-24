import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Bee from './assets/images/bee (1).png'

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Info</h2>
                        <Link to='/impressum'>Kontakt</Link>
                        <Link to='/impressum'>Impressum</Link>
                        <Link to='/impressum'>Datenschutz</Link>
                        <Link to='/impressum'>Open Source</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/wildbienensympathisanten/">Instagram</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Wildbienennisthilfe
                            <img src={Bee} alt='Bee' width={50} height={50}/>
                        </Link>
                    </div>
                    <small class='website-rights'>Hannes Klein © 2021</small>
                    <br/>
                    <small className='icon-rights'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small>
                </div>
            </section>
        </div>
    );
}

export default Footer;