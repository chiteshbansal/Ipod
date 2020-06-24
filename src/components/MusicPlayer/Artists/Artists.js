import React from 'react';
import classes from './Artists.module.css';
import Arijit from '../../../assets/Artists/arijitsingh.jpg';
const Artists = (props) =>{
    return (
        <div className={classes.Artists}>
            <div className={classes.Heading}>Arijit Singh</div>
            <div className={classes.Imagecnt}>
                <img src={Arijit} alt="Arijit singh"></img>
            </div>
        </div>
    )
}

export default Artists;