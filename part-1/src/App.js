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

function App() {
    // initialize
    const data = parseHeroData(rawData);

    return (
      <HeroPanel heroes={data} />
    );
}

export default App;
