import React from "react";
import '../../App.css';
import bee from '../assets/images/background.jpeg';
import press from '../assets/images/presse.jpg';
import { Carousel } from 'react-carousel-minimal';


const data = [
    {
        image: press,
        caption: 'Zeitungsbild'
    },
    {
        image: bee,
        caption: 'Hintergrund'
    }

];
const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}


function gallery(){
    return (
        <div className="Gallery">
            <div style={{ textAlign: "center" }}>
                <h2>Bildergallerie</h2>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default gallery;