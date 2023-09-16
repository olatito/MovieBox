import React from "react";
import Rating from "../Ratings/Rating";
import rating from "../../assets/img/Rating.png";
import tomater from "../../assets/img/Tomatoes.png";
import { useNavigate } from "react-router-dom";
import './MovieCard.css'

function MovieCard(props){
    let navigate = useNavigate(); 
    const showMoreDetails = (id) =>{
        navigate(`/movies/${id}`)
    }
    return(
        <div className="MovieCard" data-testid = "movie-card" onClick={showMoreDetails.bind(null, props.id)}>
            <div className="innerMovieCard">
                <div className="cardPoster" data-testid="movie-poster" ><img src={props.poster}/></div>
                <div className="cardYear" data-testid= "movie-release-date" >
                    <p><span>{props.year}</span></p>
                </div>
                <div className="movieTitle" data-testid= "movie-title" ><b>{props.movieTitle} </b></div>
                <div className="rating">
                <Rating image={rating} text="87.0 / 100"></Rating>
                <div className="ratingImage">
                <Rating image={tomater} text="80%"></Rating>
                </div>
                </div>
                <div className="genre">{props.genre}</div>
            </div>
        </div>
    );

}

export default MovieCard;
