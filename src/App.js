import React from "react";
import Dashboard from "./views/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'



function App(){
    return (
        <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/landing-page" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    )
}

export default App;

