import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            startDate: moment()
        }
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        })
    }

    render() {
        return <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
    }
}
export default Date;