import React from "react";
import './SideModel.css';
import { IoTicketOutline } from 'react-icons/io5';
import { TfiMenuAlt } from 'react-icons/tfi';
import sideImage from '../../../assets/img/Rectangle.png'


function SideModel(){
    return(
        <div>
            <div className="ticket">
                <IoTicketOutline />
                <p>See Showtimes</p>
            </div>
            <div className="moreMovies"> 
                <TfiMenuAlt />
            <p>More Watch options</p>
            </div>
            <div className="sideImage"><img src={sideImage}/></div>
        </div>
    )
};

export default SideModel;