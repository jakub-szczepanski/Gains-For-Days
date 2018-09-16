import React from 'react';
import ReactDOM from 'react-dom';

class LegsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            legsExercise: ''
        }
    }

    legsExerciseChange = (e) => {
        this.setState({
            legsExercise: e.target.value
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.legsExercise} onChange={this.legsExerciseChange}>
                <option>Back Squat</option>
                    <option>Front Squat</option>
                    <option>Bulgarian Split Squat</option>
                    <option>Hack Squat</option>
                    <option>Dumbbell Lunge</option>
                    <option>Leg Press</option>
                    <option>Romanian Deadlift</option>
                    <option>Leg Extensions</option>
                    <option>Leg Curls</option>
                    <option>Calf Raises</option>
                </select>
            </div>
        )
    }
}

export default LegsList;