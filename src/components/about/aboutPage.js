/**
 * Created by Raphael Karanja on 04/12/2018.
 */
import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="about_page">
                <div className="about_page__content">
                    <h1>About </h1>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default About;