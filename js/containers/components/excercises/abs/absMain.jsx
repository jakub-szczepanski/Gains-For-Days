import React from 'react';
import ReactDOM from 'react-dom';

class AbsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            absExercise: ''
        }
    }

    absExerciseChange = (e) => {
        this.setState({
            absExercise: e.target.value
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.absExercise} onChange={this.absExerciseChange}>
                    <option>Crunches</option>
                    <option>Sit Ups</option>
                    <option>Leg Raises</option>
                    <option>Elbow Plank</option>
                    <option>V Ups</option>
                    <option>Flutter Kicks</option>
                </select>
            </div>
        )
    }
}

export default AbsList;