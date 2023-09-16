import React from "react";
import Dashboard from "./views/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import './App.css'



function App(){
    return (
        <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movies" element={<Dashboard />} />
            <Route path="movies/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    )
}

export default App;

