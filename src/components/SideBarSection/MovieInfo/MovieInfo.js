import React from "react";
import './MovieInfo.css';

function MovieInfo(props){
    return(
        <div className="movieInfo">
            <div className="topInfo">
                <li>{props.movieTitle}</li>
                <li>{props.year}</li>
                <li>{props.ageRating}</li>
                <li>{props.time}</li>
                <button>{props.genre}</button> 
                <button>{props.genre}</button>
            </div>
            <div>
                <p>After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                but must confront ghosts of his past when he leads TOP GUN's elite graduates
                on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
            </div>
            <div className="castCrew">
                <p>Director: {props.director}</p>
                <p>Writer: {props.writers}</p>
                <p>Stars: {props.stars}</p>
            </div>
            <div className="awardRate">
                <div className="awardButton"><p>{props.rated}</p></div>
                <div className="nominations"><p>Award 9 nominations</p></div>
            </div>
        </div>
    )
};

export default MovieInfo;

{/* <div className="rating">
            <img src={props.image} className="ratingImg" />
            <p className="ratingText">{props.text}</p>
        </div>
    ) */}