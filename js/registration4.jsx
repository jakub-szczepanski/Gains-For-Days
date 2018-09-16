import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing.jsx';
import fire from './fire.js'

class RegistrationPageCont extends React.Component {
    constructor(props) {
        super(props);
        this.registrationCompleted = this.registrationCompleted.bind(this);
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            userId: ''
        }
    }

    nameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    emailChange = (e) => {
        this.setState({
            userEmail: e.target.value
        })
    }

    passwordChange = (e) => {
        this.setState({
            userPassword: e.target.value
        })
    }

    registrationCompleted = (e) => {
        e.preventDefault;
        const userName = this.state.userName;
        const pass = this.state.userPassword;
        const email = this.state.userEmail;
        const userId = this.state.userId;
        const user = firebase.auth().currentUser;
        let newUser;
        firebase.auth().createUserWithEmailAndPassword(email, pass).then((respond) => {
            this.setState({
                logged: true,
                userId: respond.user.uid
            })
            console.log(respond.user.uid);
        }).then(() => {
            const userId = this.state.userId;
            newUser = {
                userName: userName,
                userEmail: email,
                userPassword: pass,
                userId: userId
            };
            console.log(newUser);
        }).then((userName, email, pass) => {
            const userId = this.state.userId;
            firebase.database().ref('users/' + userId).set(newUser);
        }).then(()=>{
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            }).catch((error) => {
                console.log(error);
            })
        })
    }

    render() {
        return (
            <div>
                <form className='registration-wrapper'>
                    <input type='text' placeholder='Name' value={this.state.userName} onChange={this.nameChange} />
                    <input type='email' placeholder='Email address' value={this.state.userEmail} onChange={this.emailChange} />
                    <input type='password' placeholder='Password' value={this.state.userPassword} onChange={this.passwordChange} />
                    <input type='submit' value='Confirm registration' onClick={this.registrationCompleted} className='registration-button'/>
                </form>
            </div>
        )
    }
}

export default RegistrationPageCont;