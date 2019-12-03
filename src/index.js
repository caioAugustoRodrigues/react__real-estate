import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './css/main.css';
import './js/main.js'
import Home from './pages/home';
import Details from './pages/details';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router>
        <Home default />
        <Details path="/details/:propertyId" />
    </Router>,
    rootElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
