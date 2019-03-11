import React from 'react';
import { Route, IndexRoute } from "react-router";
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ActivitiesPage from './components/activities/ActivitiesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" Component={AboutPage} />
        <Route path="courses" Component={CoursesPage} />
        <Route path="activities" Component={ActivitiesPage} />
    </Route>
);