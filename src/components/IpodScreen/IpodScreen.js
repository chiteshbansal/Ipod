import React from 'react';
import classes from './IpodScreen.module.css';
import CurrentMenu from '../CurrentMenu/CurrentMenu';

const IpodScreen = (props) =>{
    let selectOptionClass = ['','','',''];
    selectOptionClass[props.currentMenu]=classes.SelectedOption;
    console.log(selectOptionClass);

    let assignedclasses = [classes.IpodMenu,classes.Hide];
    if(props.show){
        assignedclasses=[classes.IpodMenu,classes.Show]
    }
    let menu = ["Music",'Setting','Games','CoverFlow'];
    console.log('current menu state',props.showCurrentMenu);
    let date = new Date();
    return(
        <div className={classes.IpodScreen}>
            <div className={classes.screenheader}>
                <i class="fas fa-wifi"></i>
                <i class="fas fa-sim-card"></i>
                <i class="fas fa-battery-three-quarters"></i>
            </div>
            <div className={classes.TimeBox}>
                {date.toLocaleTimeString()}
            </div>
            {props.showCurrentMenu?<CurrentMenu currentMenu
             MusicMenu = {props.MusicMenu}
             ShowMusicMenu={props.ShowMusicMenu}>
            {menu[props.currentMenu]}
            </CurrentMenu>:null}
            <div className={assignedclasses.join(" ")}>
                <h3>Ipod Menu</h3>
                <div className={selectOptionClass[0]}>Music</div>
                <div className={selectOptionClass[1]}>Setting</div>
                <div className={selectOptionClass[2]}>Games</div>
                <div className={selectOptionClass[3]}>CoverFlow</div>
            </div>
        </div>
    )
}

export default IpodScreen;