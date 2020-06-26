import React from 'react';
import classes from './AllSongs.module.css';
import Songs from './songs';
import images from './songimages';
import {connect} from 'react-redux';
class AllSongs extends React.Component{

    state={
        Ispause:false,
        CurrentSong:1,
        CurrentImage:1,
    }
    onPauseHandler = ()=>{
        let song  = document.getElementById('song');
        if(this.state.Ispause===false){
            song.pause();
            this.setState({
                Ispause:true,
            })
        }else{
            song.play();
            this.setState({
                Ispause:false,
            })
        }
        
    }
    onNextSongHandler = ()=>{
        const NextSong = (this.state.CurrentSong)%5+1;
        console.log('next song is ', Songs["Song"+NextSong]);
        this.setState({
            CurrentSong:NextSong,
            CurrentImage:NextSong,
        },this.loadTheTrack)
        // here we have a callback function to reload the track
        // as audio tag don't change just by changing the src 
        // as there is some caching issues
        // so after changing the src we need to reload the track
        // the callback function "loadtheTrack " is doing that work 
    }
    onPreviousSongHandler = ()=>{
        let NextSong = (this.state.CurrentSong)%5-1;
        
        if(NextSong<=0){
            NextSong=(NextSong+5);
        }
        this.setState({
            CurrentSong:NextSong,
            CurrentImage:NextSong,
        },this.loadTheTrack)
    }
    loadTheTrack(){
        document.getElementById('song').load();
    }
    onTrackChangeHandler(){
        console.log("track is changed ");
    }
    // console.log(images);
    render(){
        let PauseBtnclasses =[classes.PauseBtn,classes.play];
        if(this.state.Ispause){
            PauseBtnclasses=[classes.PauseBtn,classes.pause];
        }
        return (
            <div className={classes.AllSongs}>
                {/* <div className={classes.BackBtn}
                    onClick={props.BackToMenu}
                >Back</div> */}
                <div className={classes.SongCnt}>
                    <div>
                        <img src={images['Song'+this.state.CurrentImage]} alt = "Song"></img>
                    </div>
                    <audio controls ref="audio" id = 'song' >
                        <source src={Songs['Song' + this.state.CurrentSong]}></source>
                    </audio>
                    <button onClick={this.onPauseHandler}
                        className={PauseBtnclasses.join(" ")}
                    ></button>
                    <button onClick={this.onNextSongHandler}
                        className={classes.frwdBtn}
                    ></button>
                    <button onClick={this.onPreviousSongHandler}
                        className={classes.bkwrdBtn}
                    ></button>
                </div>
            </div>
        )
    }
}

const mapStateToprops = state =>{
    return{
        Ispause:state.Ispause,
    }
}
export default connect(mapStateToprops)(AllSongs);