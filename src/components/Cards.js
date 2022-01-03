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
                            text='Die Seminarfacharbeit'
                            label='Alle wichtigen Infos'
                            path='/about'
                        />
                        <CardItem
                            src='https://www.scinexx.de/wp-content/uploads/b/i/bienenzahleng.jpg'
                            text='Unser Projekt'
                            label='Informationen zur Wildbienennisthilfe'
                            path='/project'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;