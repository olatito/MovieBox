import React from "react";
import "./Footer.css";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

function Footer(){
    return(
        <div className="footer">
            <div className="inner-footer-wrapper">
                <div className="socials">
                    <div><AiFillFacebook /></div>
                    <div><AiOutlineInstagram /></div>
                    <div><AiOutlineTwitter /></div>
                    <div><AiFillYoutube /></div>
                </div>
                <div className="footerNotes">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Press Room</a>
                </div>
                <div className="copyright"><p><AiOutlineCopyrightCircle /> 2021 MovieBox by Adriana Eka Prayudha </p> </div>
            </div>
        </div>
    )
};


export default Footer;