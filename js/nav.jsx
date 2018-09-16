import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Logout from './logout.jsx';
//import '../sass/modules/navigation.scss';
import '../sass/modules/nav2.scss';
import '../sass/modules/journalpage.scss';
import fire from './fire.js';
import UserInfoForm from './userprofilepage.jsx';
import Journal from './journalpage.jsx';
import Charts from './charts.jsx';
//import MuscleGroup from './m.jsx';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            show: false,
            user: {}
        };
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
            }
        })
    }

    logout() {
        fire.auth().signOut();
    }

    menuChange = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleClick = (e) => {
        this.menuChange();
        e.stopPropagation();
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        let menuShowHide = !this.state.show ? "hideMenu" : "showMenu";
        return (
            <HashRouter>
            <div className="wrapper">
                <div className="hamburger" onClick={this.handleClick}></div>
                <div className={menuShowHide} onClick={this.handleClick}>
                    <div >
                        <ul>
                            <li><Link to='/userprofilepage' className='links'>Profile</Link></li>
                            <li><Link to='/journalpage' className='links'>Journal</Link></li>
                            <li><Link to='/charts' className='links'>Stats</Link></li>
                            <li><a onClick={this.logout} className='logout-button'>Logout</a></li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route exact path='/userprofilepage' component={UserInfoForm} />
                    <Route exact path='/journalpage' component={Journal} />
                    <Route exact path='/charts' component={Charts} />
                </Switch>
            </div>
            </HashRouter >
        )
    }
}

export default Nav;