import React from 'react';
import classes from './MusicPlayer.module.css';
import AllSongs from '../AllSongs/AllSongs';
import Artists from '../../components/MusicPlayer/Artists/Artists';
class MusicPlayer extends React.Component{
    state = {
        showMenu:true,// to show the music menu or any specific option component
    }

    shouldComponentUpdate(prevprops,nextprops){
        //  update only when there is a change in the music option 
        // using the control pad 
        return prevprops.ShowMusicMenu!==nextprops.ShowMusicMenu;
        //  to avoid infinite update calls in the componenetdidupdate
    }

    componentDidUpdate(){
        if(this.state.showMenu!==this.props.ShowMusicMenu)
        this.setState({showMenu:this.props.ShowMusicMenu})
    }
    
    render(){

        // to differentiate the current active menu with the other 
        // by applying the active class to it 
        let  Menuclasses = ['','',''];
        Menuclasses[this.props.MusicMenu] = classes.active;
        let currentMusicMenu =null;
        let menu = <div className={classes.MusicMenu}>
                        <div className={Menuclasses[0]}>All songs</div>
                        <div className={Menuclasses[1]}>Artists</div>
                        <div className={Menuclasses[2]}>Albums</div>
                    </div>
        // if we move to a particular menu in the music options 
        // show the required menu container accordingly
        if(this.state.showMenu===false){
            menu = null;
            switch(this.props.MusicMenu){
                case 0 :currentMusicMenu=<AllSongs/>
                        break;
                case 1 : currentMusicMenu = <Artists/>
                        break;
                
            }
        }
        return(
            <div className={classes.MusicPlayer}>
                  {menu}
                  {currentMusicMenu}
            </div>
        )
    }
}

export default MusicPlayer;