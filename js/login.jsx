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
import RegistrationPageCont from './registration4.jsx';
import fire from './fire.js';
import Header from './containers/header.jsx';
import Footer from './containers/footer.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        //        this.handleChange = this.handleChange.bind(this);
        //        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        }).catch((error) => {
            console.log(error);
        })
    }

    // unfortunately syntax commented out below does not work
    //    handleChange(e) {
    //        this.setState({ [e.target.name]: e.target.value });
    //    }

    provideEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    providePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Header className='header' />
                <div className='form-wrapper'>
                    
                    <div className='login-wrapper'>
                        <form >
                            <div>
                                <div>
                                    <label className='label-email'>Email address</label>
                                </div>
                                <input type="email" placeholder='Email address' value={this.state.email} onChange={this.provideEmail} />
                            </div>
                            <div>
                                <div>
                                    <label className='label-password'>Password</label>
                                </div>
                                <input type="password" placeholder='Password' value={this.state.password} onChange={this.providePassword} />
                            </div>
                            <button type='submit' onClick={this.login} className='login-button'>Login</button>

                        </form>
                    
                    
                    <HashRouter>
                        <div>
                            <Link to='/registrationpage' className='register-link'>Register</Link>
                            <Switch>
                                <Route exact path='/registrationpage' component={RegistrationPageCont} />
                            </Switch>
                        </div>
                    </HashRouter>
                    </div>
                </div>
                <Footer className='footer' />
            </div>
        )
    }
}
export default Login;