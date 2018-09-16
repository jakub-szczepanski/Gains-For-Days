import React from 'react';
import ReactDOM from 'react-dom';

class MuscleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            muscleGroup: 'Abs',
            exercise: '',
            seriesNumber: '3',
            weightsValue1: '',
            weightsValue2: '',
            weightsValue3: ''
        }
    }

    muscleSelect = (e) => {
        this.setState({
            muscleGroup: e.target.value
        })
    }

    exerciseSelect = (e) => {
        this.setState({
            exercise: e.target.value
        })
    }

    weightsListener1 = (e) => {
        this.setState({
            weightsValue1: e.target.value
        })
    }

    weightsListener2 = (e) => {
        this.setState({
            weightsValue2: e.target.value
        })
    }

    weightsListener3 = (e) => {
        this.setState({
            weightsValue3: e.target.value
        })
    }

    saveTraining = (e) => {
        e.preventDefault();
        const user = firebase.auth().currentUser;
        const userId = user.uid;
        let workoutData = {
            muscleGroup: this.state.muscleGroup,
            exercise: this.state.exercise,
            seriesNumber: this.state.seriesNumber,
            weightsValue1: this.state.weightsValue1,
            weightsValue2: this.state.weightsValue2,
            weightsValue3: this.state.weightsValue3
        }
        let newWorkoutKey = firebase.database().ref().child('workouts').push().key;
        let workoutsUpdates = {};
        //workoutsUpdates['/workouts' + newWorkoutKey] = workoutData;
        workoutsUpdates['user-workouts/' + userId + '/' + newWorkoutKey] = workoutData;
        console.log(workoutData);
        firebase.database().ref().update(workoutsUpdates);
    }

    render() {
        if (this.state.muscleGroup == 'Abs') {
            return (<div>
                <select value={this.state.muscleGroup} onChange={this.muscleSelect}>
                    <option value='Chest'>Chest</option>
                    <option value='Arms'>Arms</option>
                    <option value='Back'>Back</option>
                    <option value='Legs'>Legs</option>
                    <option value='Abs'>Abs</option>
                </select>
                <div>
                    <select value={this.state.exercise} onChange={this.exerciseSelect}>
                        <option>Crunches</option>
                        <option>Sit Ups</option>
                        <option>Leg Raises</option>
                        <option>Elbow Plank</option>
                        <option>V Ups</option>
                        <option>Flutter Kicks</option>
                    </select>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue1} onChange={this.weightsListener1} placeholder='Set 1 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue2} onChange={this.weightsListener2} placeholder='Set 2 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue3} onChange={this.weightsListener3} placeholder='Set 3 (kg)'></input>
                </div>
                <button onClick={this.saveTraining} className='save-button'>Add exercise to database</button>
            </div>)

        } else if (this.state.muscleGroup == 'Arms') {
            return (<div>
                <select value={this.state.muscleGroup} onChange={this.muscleSelect}>
                    <option value='Chest'>Chest</option>
                    <option value='Arms'>Arms</option>
                    <option value='Back'>Back</option>
                    <option value='Legs'>Legs</option>
                    <option value='Abs'>Abs</option>
                </select>
                <div>
                    <select value={this.state.exercise} onChange={this.exerciseSelect}>
                        <option>Dumbbell Curls</option>
                        <option>Barbell Curls</option>
                        <option>Hammer Curls</option>
                        <option>Skullcrusher</option>
                        <option>Dumbbell Extension</option>
                        <option>Dips</option>
                    </select>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue1} onChange={this.weightsListener} placeholder='Set 1 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue2} onChange={this.weightsListener} placeholder='Set 2 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue3} onChange={this.weightsListener} placeholder='Set 3 (kg)'></input>
                </div>
                <button onClick={this.saveTraining} className='save-button'>Add exercise to database</button>
            </div>)
        } else if (this.state.muscleGroup == 'Back') {
            return (<div>
                <select value={this.state.muscleGroup} onChange={this.muscleSelect}>
                    <option value='Chest'>Chest</option>
                    <option value='Arms'>Arms</option>
                    <option value='Back'>Back</option>
                    <option value='Legs'>Legs</option>
                    <option value='Abs'>Abs</option>
                </select>
                <div>
                    <select value={this.state.exercise} onChange={this.exerciseSelect}>
                        <option>Deadlift</option>
                        <option>Pull-Up</option>
                        <option>T-Bar Row</option>
                        <option>Pull-Down</option>
                        <option>Dumbbell Row</option>
                        <option>Cable Row</option>
                    </select>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue1} onChange={this.weightsListener1} placeholder='Set 1 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue2} onChange={this.weightsListener2} placeholder='Set 2 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue3} onChange={this.weightsListener3} placeholder='Set 3 (kg)'></input>
                </div>
                <button onClick={this.saveTraining} className='save-button'>Add exercise to database</button>
            </div>)
        } else if (this.state.muscleGroup == 'Chest') {
            return (<div>
                <select value={this.state.muscleGroup} onChange={this.muscleSelect}>
                    <option value='Chest'>Chest</option>
                    <option value='Arms'>Arms</option>
                    <option value='Back'>Back</option>
                    <option value='Legs'>Legs</option>
                    <option value='Abs'>Abs</option>
                </select>
                <div>
                    <select value={this.state.exercise} onChange={this.exerciseSelect}>
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
                <div>
                    <input type='number' value={this.state.weightsValue1} onChange={this.weightsListener1} placeholder='Set 1 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue2} onChange={this.weightsListener2} placeholder='Set 2 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue3} onChange={this.weightsListener3} placeholder='Set 3 (kg)'></input>
                </div>
                <button onClick={this.saveTraining} className='save-button'>Add exercise to database</button>
            </div>)
        } else if (this.state.muscleGroup == 'Legs') {
            return (<div>
                <select value={this.state.muscleGroup} onChange={this.muscleSelect}>
                    <option value='Chest'>Chest</option>
                    <option value='Arms'>Arms</option>
                    <option value='Back'>Back</option>
                    <option value='Legs'>Legs</option>
                    <option value='Abs'>Abs</option>
                </select>
                <div>
                    <select value={this.state.exercise} onChange={this.exerciseSelect}>
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
                <div>
                    <input type='number' value={this.state.weightsValue1} onChange={this.weightsListener1} placeholder='Set 1 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue2} onChange={this.weightsListener2} placeholder='Set 2 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue3} onChange={this.weightsListener3} placeholder='Set 3 (kg)'></input>
                </div>
                <button onClick={this.saveTraining} className='save-button'>Add exercise to database</button>
            </div>)
        } else if (this.state.muscleGroup == 'Shoulders') {
            return (<div>
                <select value={this.state.muscleGroup} onChange={this.muscleSelect}>
                    <option value='Chest'>Chest</option>
                    <option value='Arms'>Arms</option>
                    <option value='Back'>Back</option>
                    <option value='Legs'>Legs</option>
                    <option value='Abs'>Abs</option>
                </select>
                <div>
                    <select value={this.state.exercise} onChange={this.exerciseSelect}>
                        <option>Shoulder Press</option>
                        <option>Military Press</option>
                        <option>Upright Barbell Row</option>
                        <option>Bent-Over Rear Delt Raise</option>
                        <option>Side Lateral Raise</option>
                        <option>Front Barbell Raise</option>
                    </select>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue1} onChange={this.weightsListener1} placeholder='Set 1 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue2} onChange={this.weightsListener2} placeholder='Set 2 (kg)'></input>
                </div>
                <div>
                    <input type='number' value={this.state.weightsValue3} onChange={this.weightsListener3} placeholder='Set 3 (kg)'></input>
                </div>
                <button onClick={this.saveTraining} className='save-button'>Add exercise to database</button>
            </div>)
        } 
    }
}

export default MuscleGroup;
