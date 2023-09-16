import React from "react";
import './Rating.css';

function Rating(props){
    return(
        <div className="rating">
            <img src={props.image} className="ratingImg" />
            <p className="ratingText">{props.text}</p>
        </div>
    )
}

export default Rating;