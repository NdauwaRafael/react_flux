/**
 * Created by Raphael Karanja on 2019-01-11.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default ()=>
    <nav className="navbar">
        <ul className="nav">
            <li className="nav-item">
                <Link  to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
                <Link to="/authors" className="nav-link">Authors</Link>
            </li>
        </ul>
    </nav>