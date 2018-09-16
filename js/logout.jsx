import React from 'react';
import ReactDOM from 'react-dom';
import fire from './fire.js';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            user: {}
        }
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return <button onClick={this.logout}>Logout</button>
    }
}

export default Logout; 