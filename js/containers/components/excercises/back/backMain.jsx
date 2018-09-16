import React from 'react';
import ReactDOM from 'react-dom';

class BackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backExercise: ''
        }
    }

    backExerciseChange = (e) => {
        this.setState({
            backExercise: e.target.value
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.backExercise} onChange={this.backExerciseChange}>
                    <option>Deadlift</option>
                    <option>Pull-Up</option>
                    <option>T-Bar Row</option>
                    <option>Pull-Down</option>
                    <option>Dumbbell Row</option>
                    <option>Cable Row</option>
                </select>
            </div>
        )
    }
}

export default BackList;