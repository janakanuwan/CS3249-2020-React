# CS3249-2020-React-Tutorial

## To directly use the files in this project

1. Download or clone
```bash
git clone https://github.com/janakanuwan/CS3249-2020-React.git
```

2. Go to the React root directory/folder (e.g. `part-1` or `part-2`)
```bash
cd part-1
```

3. Install dependencies (will create `node_modules` directory)
```bash
npm install
```

4. Start the application
```bash
npm start
```


## Part 1: Creating the UI with based on view tree

1. Create the react project (name: part-1) with `create-react-app`
```bash
npx create-react-app part-1
```

2. Move to the new directory and start the project
```bash
cd part-1
npm start
```


3. Create React components to show hero information
```javascript
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

// NOTE: you need to 'export' the component to access it by other files (if all components are in a single file, you do not need to 'export')
export default PowerStatsView
```
>- What is meant by 'export'? Hint: [Modules](http://exploringjs.com/es6/ch_modules.html)

```css
/* src/view/hero-view.css */
.hero-view {
    width: 170px;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.hero-view > img {
    width: 150px;
    height: 150px;
    margin: 5px;
}
```

```javascript
// src/view/HeroView.jsx
import React from 'react'

// NOTE: We did not added the extension. Will it be a problem?
// React Component
import PowerStatsView from './PowerStatsView'

// import css
import './hero-view.css'

// NOTE: React component starts with Capital letter
class HeroView extends React.Component{

    render(){
        // NOTE: we extract the data first from 'props'
        const {hero} = this.props;

        return (
            // pass css property 'class-name'
            <div className={"hero-view"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>
                {/* NOTE: we can use the child component directly in JSX */}
                {/* NOTE: we pass the data by a known name (i.e. 'data') */}
                <PowerStatsView data={hero.powerstats}/>
            </div>
        );
    }
}

export default HeroView
```

```css
/* src/view/publisher-panel.css */
.publisher-panel {
    display: flex;
    flex-flow: row wrap;
}

.publisher-panel-header {
    flex:1 0 100%;
}
```

```javascript
import React from 'react'

// React Component
import HeroView from './HeroView'

import './hero-panel.css'

class PublisherView extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {heroes} = this.props;

        // What will happen if heroes array is empty?
        const publisher = heroes[0]["publisher"];
	// Use JS map fucntion to create multiple heroes with looping
        const heroViews = heroes.map( (heroData) => <HeroView hero={heroData}/> )

        // NOTE: HTML uses simple names for its attributes, but JSX uses camel case!
        return (
            <div>
                <h2>Super Heroes from {publisher} </h2>
                <div className={"hero-panel"}> {heroViews} </div>
            </div>
        );
    }
}

export default PublisherView
```

4. Create the model objects
```javascript
// src/model/PowerStats.model.js
class PowerStats {
    constructor(intelligence, strength, speed) {
        // constructor function to initialize object
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
    }
}

export default PowerStats;
```

```javascript
// src/model/Hero.model.js
class Hero{
    constructor(id, name, powerstats = {}, image = '', publisher = ''){
        this.id = id;
        this.name = name
        this.powerstats = powerstats;
        this.image = image;
        this.publisher = publisher;
    }
}

export default Hero;
```


4. Render the react components from `src/App.js`

>- We will use data from a file to initialize the page

```javascript
import React from 'react';

import './App.css';

// React component
import PublisherView from './view/PublisherView'

// model classes
import Hero from './model/Hero.model'
import PowerStats from "./model/PowerStats.model";

// data [NOTE: generally data comes from a database or a backend server]
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
            {publishers.map( (publisher) => <PublisherView heroes={filteredHeroesByPublisher(publisher, data)} />)}
        </div>
    );
}

export default App;

```


## Part 2: Adding interactions

1. Create the react project (name: part-2) with `create-react-app`
```bash
npx create-react-app part-2
```

2. Move to the new directory and start the project
```bash
cd part-2
npm start
```


3.  Copy all the files in `part-1/src` to `src` directory (We will modify them!)

4. 

