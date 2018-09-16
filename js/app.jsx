import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.jsx'
import Redirect from 'react-router/Redirect';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import fire from './fire.js'

document.addEventListener('DOMContentLoaded', function () {
    
    ReactDOM.render(
        <Index />,
        document.getElementById('app')
    );
});