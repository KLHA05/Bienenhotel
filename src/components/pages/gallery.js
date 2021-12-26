import React from "react";
import '../../App.css';
import { Carousel } from 'react-carousel-minimal';

const data = [
    {
        image:'http://homepage.gymnasium-arnstadt.de/wp-content/uploads/2021/11/image0.jpeg',
        caption: 'Zeitungsbild'
    },
    {
        image: '/Users/hakl05/Programmierung/Bienenhotel/src/components/assets/images/background.jpeg',
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
                <h2>React Carousel Minimal</h2>
                <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
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
                        automatic={true}
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