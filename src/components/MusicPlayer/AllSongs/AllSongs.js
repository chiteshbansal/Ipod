import React from 'react';
import classes from './AllSongs.module.css';
import Song from '../../../assets/Songs/Senorita.mp3';
import images from '../../../assets/senorita.jpg';
const AllSongs  = (props)=>{

    // console.log(images);
    return (
        <div className={classes.AllSongs}>
            {/* <div className={classes.BackBtn}
                onClick={props.BackToMenu}
            >Back</div> */}
            <div className={classes.SongCnt}>
                <div>
                    <img src={images} alt = 'song'></img>
                </div>
                <audio controls id = 'song'>
                    <source src={Song}></source>
                </audio>
            </div>
        </div>
    )
}


export default AllSongs;