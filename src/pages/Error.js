import React from 'react';
import {Link} from 'react-router-dom';

import PAGE_NOT_FOUND from '../images/404-image.png';

const Error = () => {

    const img = {
        objectFit:"cover",
        width:"100%",
        height:"100%"
    };
    const container = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    };
    const imgWrap = {
        height:"500px",
        width:"500px"
    }; 

    return (
        <div style={container}>
            <div style={imgWrap}><img style={img}  src={PAGE_NOT_FOUND} alt="404-not-found" /></div>
            <div><Link to="/">Please Try Again</Link></div>
        </div>
    )
}

export default Error
