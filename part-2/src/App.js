import React from 'react';

import './App.css';

// React component
import PublisherView from './view/PublisherView'

// model classes
import Hero from './model/Hero.model'
import PowerStats from "./model/PowerStats.model";

// data [NOTE: generally data comes from database or from a backend server]
import rawData from './data'

// convert the data to supported format
const parseHeroData =(dataArray = []) =>  dataArray.map( (dataItem) =>
    new Hero(
        dataItem.id,
        dataItem.name,
        new PowerStats(dataItem.powerstats.intelligence, dataItem.powerstats.strength, dataItem.powerstats.speed),
        dataItem.image,
        dataItem.publisher
    )
);

// filter by publisher
const filteredHeroesByPublisher = (publisher, heroDataArray) =>
    heroDataArray.filter(hero => publisher === hero.publisher);

// App component: in functional format instead of extending from React.Component
function App() {
    // initialize
    const data = parseHeroData(rawData);
    const publishers = ['Marvel Comics', 'DC Comics'];

    return (
        <div>
            {/* use the JS functions directly inside the JSX syntax! */}
            {publishers.map( (publisher) => <PublisherView key={publisher} heroes={filteredHeroesByPublisher(publisher, data)} />)}
        </div>
    );
}

export default App;
