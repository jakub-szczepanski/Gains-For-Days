import React from 'react';
import ReactDOM from 'react-dom';

import Date from './dateSelect.jsx';
import MuscleGroup from './muscleGroupFinal.jsx';

class Journal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='journal-wrapper'>
                <Date />
                <MuscleGroup />
            </div>
        )
    }
}

export default Journal;

//<SaveButton />
//<MuscleGroup />
//<Exercise />
//<SeriesCount />
//<Weights />