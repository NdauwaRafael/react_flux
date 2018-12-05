/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';
import Router from 'react-router';

//components
import HomePage from '../components/homePage';
import App from '../components/app';
import AuthorsPage from '../components/author/authorPage';
import AboutPage from '../components/about/aboutPage';


let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;



const routes = (
    <Route name="home" path="/" handler={HomePage}>
        <DefaultRoute handler={App} />
        <Route name="authors" handler={AuthorsPage}/>
        <Route name="about"  handler={AboutPage}/>
    </Route>
);

export default routes;