import React from 'react'
import './Demo.css'
import start from './assets/images/start.jpg'
import '../App.css';

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Der erste Schritt zum Bau unserer Wildbienen-Nisthilfe war die Recherche. Wir informierten uns also über die Nist-Vorlieben verschiedener lokaler Wildbienenarten und kombinierten diese mit unseren erworbenen Kenntnissen über die Lebensweise der Wildbiene. </p>
                </div>
                <div className='col-2'>
                    <img className='pic1' width='570' height='320' src= {start} alt='start' />
                </div>
            </div>
        </div>
    )
}

export default Demo
