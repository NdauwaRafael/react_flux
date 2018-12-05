/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';
import Header from './header/headerPage';
import RouteHandler from 'react-router';
const App = (props) => {
    return (
        <div>
            <div className="card">
                <div className="container">
                    <Header/>
                    <RouteHandler />
                </div>
            </div>
        </div>
    );
};

export default App;