import React from 'react';
import ReactDOM from 'react-dom';

class ArmsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            armsExercise: ''
        }
    }

    armsExerciseChange = (e) => {
        this.setState({
            armsExercise: e.target.value
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.armsExercise} onChange={this.armsExerciseChange}>
                    <option>Dumbbell Curls</option>
                    <option>Barbell Curls</option>
                    <option>Hammer Curls</option>
                    <option>Skullcrusher</option>
                    <option>Dumbbell Extension</option>
                    <option>Dips</option>
                </select>
            </div>
        )
    }
}

export default ArmsList;