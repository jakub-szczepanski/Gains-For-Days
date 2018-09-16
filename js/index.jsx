import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Main from './mainpagecorrect.jsx';
import RegistrationPageCont from './registration4.jsx';
import fire from './fire.js';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener();
    }


    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? (<Main />) : (<Login />)}
            </div>

        )
    }
}

export default Index;