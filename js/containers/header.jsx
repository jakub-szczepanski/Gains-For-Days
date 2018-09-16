import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/modules/header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>Welcome to Gains For Days training journal!</h1>
            </div>
        )
    }
}

export default Header;