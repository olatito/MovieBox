import React, { useEffect } from "react";
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import CardPoster from '../../assets/img/CardPoster.png'

function MovieList(props){
    
    return(
        <div className="movieList">
            {
                props.movieList.map((movie, id) => {
                    return(
                      (id <= 9) &&  <MovieCard poster={'https://image.tmdb.org/t/p/original/'+movie.poster_path}  year={movie.release_date} movieTitle={movie.title} genre='Action, Adventure, Horror' id={movie.id}/>
                    )
                })
            }
        </div>
    );
}

export default MovieList