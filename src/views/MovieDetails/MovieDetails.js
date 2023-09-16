import React from "react";
import { useState, useEffect } from 'react';
import SideNav from "../../components/SideBarSection/SideNav/SideNav";
import LoadVideo from "../../components/SideBarSection/LoadVideo/LoadVideo"
import { useParams } from 'react-router-dom';
import axios from 'axios'

function MovieDetails(){
    let { id } = useParams();
    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzFkMjM1YWI3MjRmNjU2MTg1ZDIwMGNmZjgzZjhjNSIsInN1YiI6IjY1MDMzZmY2MWJmMjY2MDBjNWQ3MmUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9cneFiupinH3Ml5luJi2OJwGy_iYmiHKCREPIUCu88I'
    const [ movieDetails, setMovieDetails] = useState([])
    
    useEffect(() => {
        
        axios.defaults.headers['Authorization'] = `Bearer ${API_KEY}`
        axios.get(' https://api.themoviedb.org/3/movie/'+id+'?append_to_response=videos,credits&&language=en-US').then((response) => {
            setMovieDetails(response.data)
        });
      }, []);
    return(
        <div className="container">
            <div className="component"><SideNav /></div>
            <div className="components"><LoadVideo movieDetails={movieDetails} /></div>
        </div>
    )
}

export default MovieDetails;
            
            
            