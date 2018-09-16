import React from 'react';
import ReactDOM from 'react-dom';

class ChestList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chestExercise: ''
        }
    }

    chestExerciseChange = (e) => {
        this.setState({
            chestExercise: e.target.value
        })
    }

    render() {
        return(
            <div>
                <select value={this.state.chestExercise} onChange={this.chestExerciseChange}>
                <option>Flat Bench Barbell Press</option>
                    <option>Incline Barbell Press</option>
                    <option>Decline Barbell Press</option>
                    <option>Flat Bench Dumbbell Press</option>
                    <option>Incline Dumbbell Press</option>
                    <option>Decline Dumbbell Press</option>
                    <option>Dips For Chest</option>
                    <option>Cable Flyes</option>
                </select>
            </div>
        )
    }
}

export default ChestList;