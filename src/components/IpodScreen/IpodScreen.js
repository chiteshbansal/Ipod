import React from 'react';
import classes from './IpodScreen.module.css';
import CurrentMenu from '../CurrentMenu/CurrentMenu';

const IpodScreen = (props) =>{
    // this is to give special effect to the active option in 
    // the option menu 
    let selectOptionClass = ['','','',''];
    // current active menu as passed by parent component 
    // is given different css to make it visible and odd 
    selectOptionClass[props.currentMenu]=classes.SelectedOption;

    // to hide and show the menu option on click
    // hide and show classes are used for animation 
    let assignedclasses = [classes.IpodMenu,classes.Hide];
    if(props.show){
        // if we want to show the menu then show class is added
        // to the classes of menu class
        assignedclasses=[classes.IpodMenu,classes.Show]
    }
    let menu = ["Music",'Setting','Games','CoverFlow'];
    // for the date widget on the screen 
    let date = new Date();
    return(
        <div className={classes.IpodScreen}>
            {/* This is the top most info bar on the screen 
            with battery % and all  */}
            <div className={classes.screenheader}>
                <div className={classes.TimeHeader}>{date.toLocaleTimeString()}</div>
                <i class="fas fa-wifi"></i>
                <i class="fas fa-sim-card"></i>
                <i class="fas fa-battery-three-quarters"></i>
            </div>
            {/* This is the container for the time widget on the screen  */}
            <div className={classes.TimeBox}>
                {date.toLocaleTimeString()}
            </div>
            {props.showCurrentMenu?<CurrentMenu currentMenu
             MusicMenu = {props.MusicMenu}
             ShowMusicMenu={props.ShowMusicMenu}>
            {menu[props.currentMenu]}
            </CurrentMenu>:null}
            {/* above code dynamically render null or display the current menu if 
            the main button is clicked to show the active menu like music or game  */}
            <div className={assignedclasses.join(" ")}>
                <h3>Ipod Menu</h3>
                <div className={selectOptionClass[0]}>Music</div>
                <div className={selectOptionClass[1]}>Setting</div>
                <div className={selectOptionClass[2]}>Games</div>
                <div className={selectOptionClass[3]}>CoverFlow</div>
            </div>
            {/* above code show the menu bar dyanmically 
            hidding and showing using different classes */}
        </div>
    )
}

export default IpodScreen;