import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import plants from './assets/images/plants.jpg';
import materials from './assets/images/materials.jpg';
import info from './assets/images/Infotafeln.HEIC';
import wegweiser from './assets/images/Wegweiser.jpg';
import finish from './assets/images/Finish.jpg';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={materials}
                            text='Als nächstes sollte das Grundgerüst der Nisthilfe und die Schubladen entstehen. Es ging also daran diese zu bauen und Materialien, wie Totholz, Backsteine, Schilfrohr und Schneckenhäuser, zu sammeln. '
                            label = 'Einzelteilbau/Materialsammlung'
                        />
                        <CardItem
                            src={plants}
                            text='Um den Wildbienen neben den Nistmöglichkeiten auch eine zusätzliche Nahrungsquelle zu bieten, haben wir das Dach der Nisthilfe bienenfreundlich bepflanzt. '
                            label = 'Bepflanzen'
                        />

                    </ul>
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={info}
                            text='Um die Besucher der Fasanerie auf unser Projekt aufmerksam zu machen, entwickelten wir zwei Infotafeln, die zum einen allgemeine Informationen zu Wildbienen und deren Artensterben und zum anderen eine Übersicht zur Erkennung verschiedener Arten bieten sollte.'
                            label = 'Infotafeln'
                        />
                        <CardItem
                            src={wegweiser}
                            text='Weiterhin gestalteten wir ein Schild, was in der Fasanerie als Ausweisschild zu unserem Bienenhotel zu führen.'
                            label = 'Wegweiser'
                        />
                        <CardItem
                            src={finish}
                            text='Im April konnten wir unser Projekt endlich fertigstellen. Seitdem konnten wir uns schon über die ersten Wildbienen freuen, die unsere Wildbienennisthilfe als Nistplatz nutzen.'
                            label = 'Fertigstellen'
                        />
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Cards;