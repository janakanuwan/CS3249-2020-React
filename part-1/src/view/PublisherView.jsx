import React from 'react'

// React Component
import HeroView from './HeroView'

import './publisher-panel.css'

class PublisherView extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {heroes} = this.props;

        // What will happen if heroes array is empty?
        const publisher = heroes[0]["publisher"];

        const heroViews = heroes.map( (heroData) => <HeroView hero={heroData}/> )

        // NOTE: html uses simple names for its attributes, but JSX use camel case!
        // IMPORTANT: Here we only load one hero. How can we load multiple heros?
        return (
            <div>
                <h2>Super Heroes from {publisher} </h2>
                <div className={"publisher-panel"}> {heroViews} </div>
            </div>
        );
    }
}

export default PublisherView