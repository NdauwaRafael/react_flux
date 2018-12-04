/**
 * Created by Raphael Karanja on 04/12/2018.
 */
"use strict"
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;