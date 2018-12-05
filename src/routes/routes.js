/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';
// import Router from 'react-router';

//components
// import IndexPage from '../index';
import HomePage from '../components/homePage';
import App from '../components/app';
import AuthorsPage from '../components/author/authorPage';
import AboutPage from '../components/about/aboutPage';

let Router = require('react-router');
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;



const routes = (
    <Route name="home" path="/" component={HomePage}>
        <DefaultRoute component={App} />
        <Route name="authors" component={AuthorsPage}/>
        <Route name="about"  component={AboutPage}/>
    </Route>
);

export default routes;