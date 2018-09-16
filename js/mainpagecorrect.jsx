import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Routing from './routing.jsx';
import UserInfoForm from './userprofilepage.jsx';
import Journal from './journalpage.jsx';
import Charts from './charts.jsx';
import fire from './fire.js';
import Header from './containers/header.jsx';
import Footer from './containers/footer.jsx';
import Nav from './nav.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <HashRouter>
                    <Nav />
                </HashRouter>
                <Footer />
            </div>
        )
    }
}

export default Main; 