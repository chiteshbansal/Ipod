import React from 'react';
import classes from './AllSongs.module.css';
import Songs from './songs';
import images from './songimages';
// This is the container to play the songs in music menu 
// it has its own state 
class AllSongs extends React.Component{

    state={
        Ispause:false,// to check whether to play or pause the song 
        CurrentSong:1,//dynamically changing the song  and image on btn click
        CurrentImage:1,
    }

    // As the name suggest this handles the play pause of the song 
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
    // this is to play the next song in the queue on button click 
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
    // this handler is to play the previous song in the queue
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
    // this is a function to reload the audio track 
    // when we change the song 
    // without reload the song won't be played 
    // because there will be some cache in the memory for the previous song 
    // and that will be used to play the same song 
    // untill we remove the cache using reloading
    loadTheTrack(){
        document.getElementById('song').load();
    }

    render(){
        let PauseBtnclasses =[classes.PauseBtn,classes.play];
        if(this.state.Ispause){
            PauseBtnclasses=[classes.PauseBtn,classes.pause];
        }
        // Changing the pause and play button sign dyanmically
        return (
            <div className={classes.AllSongs}>
                {/* <div className={classes.BackBtn}
                    onClick={props.BackToMenu}
                >Back</div> */}
                <div className={classes.SongCnt}>
                    <div>
                        {/* The images the rendered dyanmiclly according to the current song state */}
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


export default AllSongs;