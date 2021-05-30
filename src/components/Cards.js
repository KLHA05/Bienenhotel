import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Schaut in diesen Kategorien vorbei</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://www.tagesspiegel.de/images/extreme-magnification-honey-bee/24680756/2-format43.jpg'
                            text='Das sind wir!'
                            label='Information'
                            path='/about'
                        />
                        <CardItem
                            src='https://www.dieversicherer.de/resource/image/3534/1x1/640/640/7d970a42588a29ce33174fe0e653b95b/oI/bild-wie-imker-gegen-bienen-sterben-versichert-sind.jpg'
                            text='Das ist unser Bienenhotel!'
                            label='Projekt'
                            path='/project'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;