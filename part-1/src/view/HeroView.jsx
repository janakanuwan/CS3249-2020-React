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