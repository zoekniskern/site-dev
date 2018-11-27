import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import '../App.css';

export default class Contact extends Component {
    render() {

        const color = "#BE1E2D";
        return(
            <div className="">
                <h3>Get in touch!</h3>
                <p>I’d love to hear from you so send me an email or follow me on social media (links below)!</p>
                <br/>
                <p>Email: zxk3766@rit.edu</p>
                <SocialIcon color={color} url="https://github.com/zoekniskern" />
                <SocialIcon color={color} url="https://www.linkedin.com/in/zoe-kniskern" />
                <SocialIcon color={color} url="https://open.spotify.com/user/1253408619" />
                <SocialIcon color={color} url="https://www.instagram.com/zoek.jpg/?hl=en" />
                <div className="">
                        <img src="/assets/orientation.jpg" className="about-fluid about-images" alt="RIT NSO"></img>
                    </div>

                <div className="card">
                    <div className="card-body">
                        <h5>About this Website</h5>
                        <p>This website was my first exploration into using the create-react-app. It employs bootstrap as well as several other fantastic react packages:</p>
                        <ul>
                            <li><a href="https://www.npmjs.com/package/react-responsive-carousel">Responsive React Carousel</a></li>
                            <li><a href="https://www.npmjs.com/package/react-youtube">React Youtube</a></li>
                            <li><a href="https://www.npmjs.com/package/react-social-icons">React Social Icons</a></li>
                        </ul>
                    </div>
                </div>
                <span></span>
            </div>
        )
    }
}