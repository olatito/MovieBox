import React from "react";
import './LoadVideo.css';
import MovieInfo from "../MovieInfo/MovieInfo";
import SideModel from "../SideModel/SideModel";

function LoadVideo () {
    return (
        <div>
        <div className="video-container">
            <video controls autoPlay className="video">
            <source src={process.env.PUBLIC_URL + '/sample-video.mp4'} type="video/mp4" />
            {/* Add additional source elements for other formats if needed */}
            </video>
        </div>
        <div className="movieDesc">
        <div>
            <MovieInfo movieTitle='Top Gun: Maverick' year='2022' ageRating='PG-13' time='2h 10m' director='Joseph Kosinski' writers='Olayiwola Tofunmi' stars='Tito, Tom Cruise' rated='Top rated movie #65' />
        </div>
        <div>
            <SideModel />    
        </div>
        </div>
      </div>
    );
  }

  export default LoadVideo;