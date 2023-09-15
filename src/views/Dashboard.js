import React from "react";
import './Dashboard.css';
import HeaderSection from "../components/HeaderSection/HeaderSection";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/Footer";
import SideNav from "../components/SideBarSection/SideNav/SideNav";
import LoadVideo from "../components/SideBarSection/LoadVideo/LoadVideo";
function Dashboard(){
    return(
        <div className="container">
            {/* <HeaderSection />
            <MovieList />
            <Footer /> */}
            <div className="component"><SideNav /></div>
            <div className="components"><LoadVideo /></div>
        </div>
    )
}

export default Dashboard;