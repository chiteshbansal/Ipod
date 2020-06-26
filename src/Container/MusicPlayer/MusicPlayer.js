import React from 'react';
import classes from './MusicPlayer.module.css';
import AllSongs from '../AllSongs/AllSongs';
import Artists from '../../components/MusicPlayer/Artists/Artists';
class MusicPlayer extends React.Component{
    state = {
        showMenu:true,
    }

    shouldComponentUpdate(prevprops,nextprops){
        console.log(prevprops,nextprops);
        return prevprops.ShowMusicMenu!==nextprops.ShowMusicMenu;
    }

    componentDidUpdate(){
        console.log('inside the component will update')
        if(this.state.showMenu!==this.props.ShowMusicMenu)
        this.setState({showMenu:this.props.ShowMusicMenu})
    }

    // BackToMenuHandler = ()=>{
    //     console.log('back to menu heandler')
    //     this.setState({
    //         showMenu:true,
    //     })
    // }
    
    render(){

        let  Menuclasses = ['','',''];
        Menuclasses[this.props.MusicMenu] = classes.active;
        let currentMusicMenu =null;
        let menu = <div className={classes.MusicMenu}>
                        <div className={Menuclasses[0]}>All songs</div>
                        <div className={Menuclasses[1]}>Artists</div>
                        <div className={Menuclasses[2]}>Albums</div>
                    </div>
        
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