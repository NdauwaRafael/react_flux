import React from 'react';
import ReactDOM from 'react-dom';
import './utils/imports';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';
import AppInitializer from './Flux/actions/InitializeActions';
AppInitializer.initApp();

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
