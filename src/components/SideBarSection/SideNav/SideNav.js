import React from "react";
import './SideNav.css';
import Logo from '../../../assets/img/Logo2.png';
import { GoHome } from 'react-icons/go';
import { BiCameraMovie } from 'react-icons/bi'
import { PiMonitorPlayLight } from 'react-icons/pi'
import { BsCalendar4Week} from 'react-icons/bs';
import { IoLogOutOutline} from 'react-icons/io5'

function SideNav (){
    return(
        <div className="sideBar">
            <div className="innerSideBar">
                <div className="navLogo"><
                    img src={Logo}/>
                </div>
                <div className="navButton">
                    <div><nav><GoHome /> Home </nav></div>
                    <div><nav><BiCameraMovie /> Movies</nav></div>
                    <div><nav><PiMonitorPlayLight /> TV Series</nav></div>
                    <div><nav><BsCalendar4Week /> Upcoming</nav></div>
                </div>
                <div className="playNav">
                    <div>
                        <h5>Play movie quizes and earn free ticket</h5>
                        <p className="playNavpara">50K people are playing now </p>
                    </div>
                    <div className="stopPlay">
                        <button>Start Playing</button>
                    </div>
                </div>
                <div>
                <div><IoLogOutOutline /> Log Out</div>
                </div>
            </div>
        </div>

    )
};
export default SideNav;
