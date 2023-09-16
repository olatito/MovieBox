import React from "react";
import "./HeaderSection.css";
import Header from "../Header/Header";
import rating from "../../assets/img/Rating.png";
import tomater from "../../assets/img/Tomatoes.png";
import Rating from "../Ratings/Rating";
import poster from "../../assets/img/Poster.png";
import {AiFillPlayCircle } from 'react-icons/ai';


function HeaderSection() {
  return (
    <div className="headerSection" >
        <img src={poster} className="headerPoster"/>
      <Header />
      <div className="inner-header-section">
        <div className="headerCard">
            <div className="title">
            <p>John Wick 3: Parabellum</p>
            </div>
            <div className="rating">
            <div className="ratingImages">
                <Rating image={rating} text="87.0 / 100"></Rating>
            </div>
            <Rating image={tomater} text="80%"></Rating>
            </div>
            <div>
            <p>
                John Wick is on the run after killing a member of the international
                assassins' guild, and with a $14 million price tag on his head, he
                is the target of hit men and women everywhere. Watch trailer
            </p>
            </div>
            <div className="watchTrailer">
            <AiFillPlayCircle />
            <a href="https://google.com">
                <span>WATCH TRAILER</span>
            </a>
            </div>
        </div> 
      </div>
    </div>
  );
}

export default HeaderSection;
