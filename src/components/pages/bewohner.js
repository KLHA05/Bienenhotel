import React from "react";
import '../../App.css';
import { Carousel } from 'react-carousel-minimal';
import img1 from '../assets/images/Bewohner/IMG-20210912-WA0006.jpg';
import img2 from '../assets/images/Bewohner/PXL_20210619_123136814.MP.jpg';
import img3 from '../assets/images/Bewohner/PXL_20210619_123147425.MP.jpg';
import img4 from '../assets/images/Bewohner/PXL_20210619_123153315.MP.jpg';
import img5 from '../assets/images/Bewohner/PXL_20210619_123401133.MP.jpg';
import img6 from '../assets/images/Bewohner/PXL_20210619_123200029.MP.jpg';
import img7 from '../assets/images/Bewohner/PXL_20210619_123504472.MP.jpg';
import img8 from '../assets/images/Bewohner/PXL_20210626_121835233.MP.jpg';
import img9 from '../assets/images/Bewohner/PXL_20210626_121837416.MP.jpg';
import img10 from '../assets/images/Bewohner/PXL_20211001_114705571.jpg';
import img11 from '../assets/images/Bewohner/PXL_20210626_121809548.MP.jpg';
import img12 from '../assets/images/Bewohner/PXL_20210619_123509349.MP.jpg';



const data = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img4,
    },
    {
        image: img5,
    },
    {
        image: img6,
    },
    {
        image: img7,
    },
    {
        image: img8,
    },
    {
        image: img9,
    },
    {
        image: img10,
    },
    {
        image: img11,
    },
    {
        image: img12,
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


function Bewohner(){
    return (
        <div className="Gallery">
            <div style={{ textAlign: "center" }}>
                <h2>Erste Bewohner</h2>
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

export default Bewohner;