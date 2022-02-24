import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import plants from './assets/images/plants.jpg';
import materials from './assets/images/materials.jpg';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={materials}
                            text='Als nächstes sollte das Grundgerüst der Nisthilfe und die Schubladen entstehen. Es ging also daran diese zu bauen und Materialien, wie Totholz, Backsteine, Schilfrohr und Schneckenhäuser, zu sammeln. '
                            label = 'Einzelteilbau/Materialsammlung:'
                        />
                        <CardItem
                            src={plants}
                            text='Um den Wildbienen neben den Nistmöglichkeiten auch eine zusätzliche Nahrungsquelle zu bieten, haben wir das Dach der Nisthilfe bienenfreundlich bepflanzt. '
                            label = 'Bepflanzen'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;