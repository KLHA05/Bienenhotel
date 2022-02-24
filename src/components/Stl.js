import React from 'react';
import {StlViewer} from "react-stl-viewer";

const url = './assets/Bienenehrenhaus.stl';

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

function Stl() {
    return (
        <StlViewer
            style={style}
            orbitControls
            shadows
            url={url}
        />
    );
}

export default Stl;