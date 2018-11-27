import React, { Component } from "react";
import '../App.css';

import { 
    Link 
} from "react-router-dom";

export default class Header extends Component {
    render() {
        return(
            <div className="nav">
                <Link to="/" className=""><img className="logo" src="/assets/logo.png" alt="logo for Zoe Kniskern"></img></Link>
                <div className="">
                    <Link to="/" className="">Home</Link><br/>
                    <Link to="/projects" className="">Projects</Link><br/>
                    <Link to="/contact" className="">Contact</Link>
                </div>
            </div>
        )
    }
}
