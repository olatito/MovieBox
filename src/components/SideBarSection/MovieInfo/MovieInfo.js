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
                {
                    props.genres?.map((genre, id) => {
                        return(
                            <button key={id}>{genre.name}</button> 
                        )
                    })
                }
            </div>
            <div>
                <p>{props.overview}</p>
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