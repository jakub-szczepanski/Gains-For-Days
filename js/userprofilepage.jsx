import React from 'react';
import ReactDOM from 'react-dom';
import fire from './fire.js';

class UserInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            sex: '',
            height: '',
            weight: ''
        }
    }

    nameChange = (e) => {
        setState({
            name: e.target.value
        })
    }
    sexChange = (e) => {
        this.setState({
            sex: e.target.value
        })
        
    }
    heightChange = (e) => {
        this.setState({
            height: e.target.value
        })
        
    }
    weightChange = (e) => {
        this.setState({
            weight: e.target.value
        })
        
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

    saveChanges = (e) => {
        e.preventDefault();
        const user = firebase.auth().currentUser;
        const userName = this.state.name;
        const email = this.state.user.email;
        const userId = user.uid;
        const sex = this.state.sex;
        const height = this.state.height;
        const weight = this.state.weight;
        let updateUser = {
            sex: this.state.sex,
            height: this.state.height,
            weight: this.state.weight
        };
        firebase.database().ref('users/' + userId).update(updateUser);
        console.log('clicked');
        console.log(user.email);
    }

    render() {
        return (
            <div className='profile-wrapper'>
                <form>
                    <span>Hello</span>
                    <span>{this.state.user.email}</span>
                    <br />
                    <span>Sex</span>
                    <select value={this.state.sex} onChange={this.sexChange}>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <br />
                    <input type='text' value={this.state.height} placeholder='Height' onChange={this.heightChange}></input>
                    <br />
                    <input type='text' value={this.state.weight} placeholder='Weight' onChange={this.weightChange}></input>
                    <br />
                    <input type='submit' value='Save Changes' onClick={this.saveChanges} className='submit-button' />
                </form>
            </div>
        )
    }
}

export default UserInfoForm;