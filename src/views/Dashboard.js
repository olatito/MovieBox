import React from "react";
import { useState, useEffect } from 'react';
import './Dashboard.css';
import HeaderSection from "../components/HeaderSection/HeaderSection";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/Footer";
import SideNav from "../components/SideBarSection/SideNav/SideNav";
import axios from "axios";
import LoadVideo from "../components/SideBarSection/LoadVideo/LoadVideo";
function Dashboard(){
  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzFkMjM1YWI3MjRmNjU2MTg1ZDIwMGNmZjgzZjhjNSIsInN1YiI6IjY1MDMzZmY2MWJmMjY2MDBjNWQ3MmUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9cneFiupinH3Ml5luJi2OJwGy_iYmiHKCREPIUCu88I'

  const [ topRatedMovies, setTopRatedMovies] = useState([])
    

    useEffect(() => {

        axios.defaults.headers['Authorization'] = `Bearer ${API_KEY}`
        axios.get('https://api.themoviedb.org/3/movie/top_rated').then((response) => {
          setTopRatedMovies(response.data.results)
          console.log(response)
        });
      }, []);

    return(
        <div className="">
            <HeaderSection />
            <MovieList movieList={topRatedMovies} />
            <Footer />
            {/* <div className="component"><SideNav /></div>
            <div className="components"><LoadVideo /></div> */}
        </div>
    )
}

export default Dashboard;