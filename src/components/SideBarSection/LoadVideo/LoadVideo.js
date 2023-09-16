import React from "react";
import "./LoadVideo.css";
import MovieInfo from "../MovieInfo/MovieInfo";
import SideModel from "../SideModel/SideModel";

function LoadVideo({ movieDetails }) {
  const movieRuntime = `${movieDetails.runtime} mins`;
  return (
    <div>
      <div className="video-container">
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${movieDetails.videos?.results[0].key}`}
        ></iframe>
      </div>
      <div className="movieDesc">
        <div>
          <MovieInfo
            movieTitle={movieDetails.original_title}
            year={movieDetails.release_date}
            ageRating="PG-13"
            time={movieRuntime}
            director=""
            writers="Olayiwola Tofunmi"
            stars="{movieDetails.credits.cast.slice(0, 5)}"
            rated="Top rated movie #65"
            overview={movieDetails.overview}
            genres={movieDetails.genres}
          />
        </div>
        <div>
          <SideModel />
        </div>
      </div>
    </div>
  );
}

export default LoadVideo;
