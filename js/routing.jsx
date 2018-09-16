import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import Index from './index.jsx';
import Login from './login.jsx';
import RegistrationPageCont from './registration4.jsx';
import Main from './mainpagecorrect.jsx';
import UserInfoForm from './userprofilepage.jsx';
import Journal from './journalpage.jsx';
import Charts from './charts.jsx';

class Routing extends React.Component {
    render() {
        return (
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/mainpage" component={Main} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registrationpage" component={RegistrationPageCont} />
                        <Route exact path="/userprofilepage" component={UserInfoForm} />
                        <Route exact path="/journalpage" component={Journal} />
                        <Route exact path="/chartspage" component={Charts} />
                    </Switch>
                </HashRouter>
        )
    }
}

export default Routing;