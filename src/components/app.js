/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';
import Header from './Layout/Header/index';
import Main from './Layout/Main';
import AppInitializer from '../Flux/actions/InitializeActions';
AppInitializer.initApp();


const App = (props) => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="card">
                        <Header/>
                    </div>
                    <Main/>
                </div>
            </div>
        </div>
    );
};

export default App;
