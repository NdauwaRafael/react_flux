/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';
import Header from './Header/index';
import Main from './Main'
const App = (props) => {
    return (
        <div>
            <div className="card">
                <div className="container">
                    <Header/>
                    <Main />
                </div>
            </div>
        </div>
    );
};

export default App;