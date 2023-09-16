import React from "react";
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import CardPoster from '../../assets/img/CardPoster.png'

function MovieList(){
    return(
        <div className="movieList">
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            <MovieCard poster={CardPoster}  year='2020' movieTitle='Stranger Things' genre='Action, Adventure, Horror'/>
            
        </div>
    );
}

export default MovieList