/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';
// import Router from 'react-router';

//components
// import IndexPage from '../index';
import HomePage from '../components/Home/index';
import AuthorsPage from '../components/author/authorPage';
import AddAuthor from '../components/author/Add';

import AboutPage from '../components/about/aboutPage';
import NotFound from '../components/404'
import {Route, Switch} from 'react-router-dom';


const routes = (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/authors" component={AuthorsPage}/>
        <Route path="/addAuthor" component={AddAuthor}/>
        <Route path="/about" component={AboutPage}/>
        <Route component={NotFound}/>
    </Switch>
);

export default routes;