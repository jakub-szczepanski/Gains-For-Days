import React from 'react';
import ReactDOM from 'react-dom';

class ShouldersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldersExercise: ''
        }
    }

    shouldersExerciseChange = (e) => {
        this.setState({
            shouldersExercise: e.target.value
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.shouldersExercise} onChange={this.shouldersExerciseChange}>
                    <option>Shoulder Press</option>
                    <option>Military Press</option>
                    <option>Upright Barbell Row</option>
                    <option>Bent-Over Rear Delt Raise</option>
                    <option>Side Lateral Raise</option>
                    <option>Front Barbell Raise</option>
                </select>
            </div>
        )
    }
}

export default ShouldersList;