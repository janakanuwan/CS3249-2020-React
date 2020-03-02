import React from 'react'

class PowerStatsView extends React.Component{

    // NOTE: render method should be implemented if you use ES6 classes
    render(){
        // NOTE: we extract the data first from 'props'
        const {data} = this.props;

        // NOTE: In list we have to add 'key' attribute. Why?
        const powerList = Object.entries(data).map((name, index) =>
            <li key={index}> {name[0]} : {name[1]} </li>
        );

        return (
            <div>
                <p>Powers: </p>
                <ul> {powerList} </ul>
                {/* NOTE: JSX comments */}
            </div>
        );
    }
}

export default PowerStatsView