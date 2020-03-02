import React from 'react';

import './App.css';

// React component
import HeroPanel from './view/HeroPanel'

// model classes
import Hero from './model/Hero.model'
import PowerStats from "./model/PowerStats.model";

// data
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

function App() {
    // initialize
    const data = parseHeroData(rawData);
    const publishers = ['Marvel Comics', 'DC Comics'];

    return (
        <div>
            {publishers.map( (publisher) => <HeroPanel heroes={filteredHeroesByPublisher(publisher, data)} />)}
        </div>
    );
}

export default App;
