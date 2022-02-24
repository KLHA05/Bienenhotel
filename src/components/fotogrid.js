import React from "react";
import img1 from './assets/images/Begrünung/IMG-20210911-WA0011.jpg';
import img2 from './assets/images/Begrünung/IMG-20210912-WA0010.jpg';
import img3 from './assets/images/Begrünung/IMG-20210912-WA0011.jpg';
import img4 from './assets/images/Begrünung/IMG_6365.jpg';
import img5 from './assets/images/Begrünung/PXL_20210413_141527807.jpg';
import img6 from './assets/images/Begrünung/PXL_20210413_141558587.jpg';
import img7 from './assets/images/Begrünung/PXL_20210413_142729799.jpg';
import img8 from './assets/images/Begrünung/PXL_20210508_151625050.MP.jpg';
import img9 from './assets/images/Begrünung/PXL_20210426_125634233.MP.jpg';
import img10 from './assets/images/Begrünung/PXL_20210501_103736974.MP.jpg';
import img11 from './assets/images/Begrünung/PXL_20210508_151310698.MP.jpg';
import img12 from './assets/images/Begrünung/PXL_20210521_124253620.MP.jpg';
import img13 from './assets/images/Begrünung/PXL_20210521_124221098.MP.jpg';
import img14 from './assets/images/Begrünung/PXL_20210603_100407712.MP.jpg';
import img15 from './assets/images/Begrünung/PXL_20210619_123818519.MP.jpg';
import img16 from './assets/images/Begrünung/PXL_20210619_123427610.MP.jpg';
import img17 from './assets/images/Begrünung/PXL_20210619_123807576.MP.jpg';
import img18 from './assets/images/Begrünung/PXL_20210603_100358426.MP.jpg';
import table from './assets/images/Bildschirmfoto 2022-02-24 um 19.03.04.png';


import './fotogrid.css'



function Fotogrid(){
    return(
            <body>
            <div className="header">
                <h1>Begrünung</h1>
            </div>
            <div className='row'>
                <div className='column'>
                    <img src={img1}  alt='img'/>
                    <img src={img2}  alt='img'/>
                    <img src={img3}  alt='img'/>
                    <img src={img4}  alt='img'/>
                    <img src={img5}  alt='img'/>
                </div>
                <div className='column'>
                    <img src={img6}  alt='img'/>
                    <img src={img7}  alt='img'/>
                    <img src={img8}  alt='img'/>
                    <img src={img9} alt='img'/>

                </div>
                <div className='column'>
                    <img src={img11}  alt='img'/>
                    <img src={img12} alt='img'/>
                    <img src={img13}  alt='img'/>
                    <img src={img14}  alt='img'/>
                    <img src={img15}  alt='img'/>
                </div>
                <div className='column'>
                    <img src={img10}  alt='img'/>
                    <img src={img16} alt='img'/>
                    <img src={img17}  alt='img'/>
                    <img src={img18}  alt='img'/>
                </div>
            </div>
            <div>
                <div className='text'>
                    <p>
                        Um den Wildbienen neben der Nistmöglichkeit auch eine zusätzliche Nahrungsquelle zu bieten, haben wir das Dach der Nisthilfe bienenfreundlich bepflanzt.
                        Auch auf die umliegenende Wiesenflächen haben wir zusätzlich Samen verteilt, um eine möglichst große Varianz an Blüten bereitzustellen.<br/>

                        Was kann man selbst tun?<br/>
                        Auch du kannst unseren kleinen Freunden helfen. Zusammen kannst du selbst Pflanzen verschiedenster Art aussäen.
                        Wichtig dabei:<br/>
                        Eine große Vielfalt, so dass die Wildbienen ein möglichst großes Nahrungsangebot zur Verfügung gestellt bekommen.
                        Abwechslungsreiche Blüten, so dass möglichst das ganze Jahr über etwas blüht. (Siehe Tabelle)
                        Und wenn du ganz spezifisch helfen möchtest, kannst du dir Pflanzen heraussuchen, die ganz spezifisch, die Wildbienen präferieren, welche in deiner Umgebung leben.
                    </p>
                </div>
                <div className='table' >
                    <img src={table} alt='table' height='1000'/>
                </div>
            </div>
            </body>

    )
}

export default Fotogrid;