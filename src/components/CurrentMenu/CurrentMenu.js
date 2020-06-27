import React from 'react';
import classes from './CurrentMenu.module.css';
import MusicPlayer from '../../Container/MusicPlayer/MusicPlayer';
import Games from '../Games/Games';
// this component render different menu option 
// Music and Games have separate components 
// rest have a basic comman template 
const CurrentMenu = (props)=>{
    let current ;
    // using props we receive which option is being clicked 
    // and accordingly render the component using switch statement 
    switch(props.children){
        case 'Music':current=<MusicPlayer 
                                MusicMenu ={props.MusicMenu}
                                ShowMusicMenu={props.ShowMusicMenu}/>;
                        break;
        case 'Games':current=<Games/>
                    break;
        default:current=<div 
                            className={classes.CurrentMenu_content}>
                                {props.children}
                        </div>
    }
    return(
        <div className={classes.CurrentMenu}>
            
            {current}
        </div>
    )
}


export default CurrentMenu;