import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bee from './assets/images/wildbienen-an-einem-insekten-hotel-100-resimage_v-variantSmall16x9_w-960.jpeg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Schaut in diesen Kategorien vorbei</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://www.tagesspiegel.de/images/extreme-magnification-honey-bee/24680756/2-format43.jpg'
                            text='Die Seminarfacharbeit'
                            label='Alle wichtigen Infos'
                            path='/semi'
                        />
                        <CardItem
                            src = {bee}
                            text='Unser Projekt'
                            label='Informationen zur Wildbienennisthilfe'
                            path='/entstehung'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;