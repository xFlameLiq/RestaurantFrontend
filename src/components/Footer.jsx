import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";


const Footer = () => {
 return (
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-nav">
                    <ul>
                        <li>Resources:</li>
                    </ul>
                </div>
                <div class="footer-icons">
                    <DiJavascript />
                    <DiReact />
                    <DiGithubBadge/>
                </div>
            </div>
        </div>
    </footer>
 );
}

export default Footer;