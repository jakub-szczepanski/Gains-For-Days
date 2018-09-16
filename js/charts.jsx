import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/modules/charts.scss';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

class Charts extends React.Component {

    render() {
        const data = [
            {name: '9/1/2018', uv: 60, amt: 120},
            {name: '9/2/2018', uv: 60, amt: 120},
            {name: '9/3/2018', uv: 70, amt: 120},
            {name: '9/4/2018', uv: 70, amt: 120},
            {name: '9/5/2018', uv: 80, amt: 120},
            {name: '9/6/2018', uv: 60, amt: 120},
            {name: '9/7/2018', uv: 90, amt: 120},
      ];
        return (
            <div className='charts-wrapper'>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        )
    }
}

export default Charts;