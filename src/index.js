import React from 'react';
import ReactDOM from 'react-dom';
import './utils/imports';
import routes from './routes/routes';
import {Router} from 'react-router';

ReactDOM.render((<Router>{routes}</Router>), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
