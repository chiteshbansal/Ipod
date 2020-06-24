
import React from 'react';
import classes from './Ipod.module.css';
import IpodScreen from '../../components/IpodScreen/IpodScreen';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    state={
        showMenu:false,// showing main menu or not
        NumMenu :4,
        currentmenu:0,// current menu to rotote using zingtouch
        currentAngle : 0,
        showCurrentMenu:false,
        currentMusicMenu:0,
        ShowMusicMenu :true,
    }

    componentDidMount(){
        // console.log('insie teh comp did mout');
        // applying zing touch to the control pad
        if( this.state.showCurrentMenu===false){
            let target = document.getElementById('pad');
            console.log('target is ',target);
            var region = ZingTouch.Region(target);
            region.bind(target, 'rotate', (e)=>this.rotateTheMenu(e)); 
        }             
    }
    // function to rotate the menu when targeted the control pad 
    rotateTheMenu = (e)=>{
            let {currentAngle} = this.state;
            let menu;
            
            // currentAngle += e.detail.distanceFromLast;
            this.setState((prevState)=>{
                return{currentAngle:prevState.currentAngle+e.detail.distanceFromLast};
            })
            console.log('current angle is ',currentAngle);
            console.log('distance from last orign ',e.detail.distanceFromLast)

            // in half the rotate of the pad 
            // rotating through all the menu options once
            let interval = 180/this.state.NumMenu;
            menu = Math.floor(currentAngle/interval)%4;
            console.log(menu);
            console.log(currentAngle);
            if(menu<0){
                menu+=40;
                menu%=4;
            }
            
            console.log('menu is ',menu);
            // this is the condition  to check whether we are inside 
            // the main menu or inside the music menu 
            if(menu!==this.state.currentMenu && !this.state.showCurrentMenu){
                // we are inside the main menu so we are changing the main options
                this.setState({
                    currentmenu:menu,
                })
            }else if(this.state.showCurrentMenu){
                // condition specifies that we are inside the music menu 
                // and we are changing accordingly
                this.setState({
                    currentMusicMenu:menu%3,
                })
            }
    }

    // this handler is to show or hide the main menu
    // also closing the previously opened any other menu if any
    showMenuHandler=()=>{ 
        this.setState((prevState)=>{
            return{showMenu:!prevState.showMenu,showCurrentMenu:false,ShowMusicMenu:true,};
        })
    }

    // This handler is to open a particular menu 
    // for both wherer we are in main menu or 
    // music menu , accordingly conditions are applied
    OpenCurrentMenuHandler = ()=>{
        if(this.state.showMenu===true)// if main menu is open 
        this.setState({showCurrentMenu:true,showMenu:false,});
        else if(this.state.showCurrentMenu===true){
            // if the submenu like the music is open
            this.setState((prevstate)=>{
                return {ShowMusicMenu:!prevstate.ShowMusicMenu}
            })
        }
    }

    playpauseHandler= ()=>{
        this.setState()
    }
    render(){
        return(
            <div className={classes.IpodContainer}>
                <div className={classes.Ipod}>
                    <IpodScreen 
                    show={this.state.showMenu} 
                    currentMenu = {this.state.currentmenu}
                    showCurrentMenu = {this.state.showCurrentMenu}
                    MusicMenu = {this.state.currentMusicMenu}
                    ShowMusicMenu={this.state.ShowMusicMenu}/>
                    {/* <IpodControls clicked = {this.showMenuHandler}/> */}
                    <div className={classes.IpodControls}>
                        <div className={classes.ControlPad} id ='pad'>
                            <div className={classes.MainBtn} onClick={this.OpenCurrentMenuHandler} ></div>
                            <div className={classes.frwdBtn}></div>
                            <div className={classes.bkwrdBtn}></div>
                            <div className={classes.pauseBtn}
                            onClick={this.playpauseHandler}></div>
                            <div className={classes.menuBtn} onClick={this.showMenuHandler}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Ipod;