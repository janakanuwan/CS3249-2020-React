import React from 'react'
import PowerStatsChart from "./PowerStatsChart";

class PowerStatsView extends React.Component {
    // static utility function
    static graphDataMapper(data){
        const {intelligence, strength, speed} = data;
        return (
            [
                {
                    name: 'Powers', intelligence: intelligence, strength: strength, speed: speed,
                }
            ]
        );
    }

    render() {
        const {data} = this.props;

        return (
            <PowerStatsChart data={PowerStatsView.graphDataMapper(data)}/>
        );
    }
}

export default PowerStatsView;