/**
 * Created by Raphael Karanja on 04/12/2018.
 */
import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="about_page">
                <div className="about_page__content">
                    <div className="header">

                    </div>
                    <div className="content">
                        <div className="container">
                            <h1>About </h1>
                            <p>
                                The Communications Lead will be tasked with the development of
                                social media posts, blogs, press releases, video content and other communications
                                material in line with the communications strategy. Content shall (among others)
                                document learnings from Pangea Accelerator programs, showcase startups
                                participating in Pangea Accelerator programs, provide insights into the African startup
                                ecosystem and share opportunities
                            </p>
                        </div>
                    </div>
                    {/*<ul>*/}
                    {/*<li>React</li>*/}
                    {/*<li>React Router</li>*/}
                    {/*<li>Flux</li>*/}
                    {/*<li>Node</li>*/}
                    {/*<li>Gulp</li>*/}
                    {/*<li>Browserify</li>*/}
                    {/*<li>Bootstrap</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        )
    }
};

export default About;