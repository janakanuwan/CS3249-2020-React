import React from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

class PowerStatsChart extends React.Component{

    render(){
        // NOTE: data format should be directly supported
        const {data} = this.props;

        return (
            <BarChart
                width={200}
                height={200}
                data={data}
                margin={{
                    top: 5, right: 5, left: 0, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {/* What is meany by 'dataKey'? */}
                <Bar dataKey="intelligence" fill="#8884d8"/>
                <Bar dataKey="strength" fill="#82ca9d"/>
                <Bar dataKey="speed" fill="#ffc658"/>
            </BarChart>
        );
    }
}

export default PowerStatsChart;