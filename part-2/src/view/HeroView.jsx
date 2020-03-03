import React from 'react'

// NOTE: We did not added the extension. Will it be a problem?
// React Component
import PowerStatsView from './PowerStatsView'

// import css
import './hero-view.css'

// NOTE: React component starts with Capital letter
class HeroView extends React.Component{

    constructor(props){
        super(props);

        const {hero} = props;
        // NOTE: adding local state to class
        // NOTE: we create a local state, and set the initial values from 'props'
        this.state = {
            intelligence: hero.powerstats.intelligence,
            strength: hero.powerstats.strength,
            speed: hero.powerstats.speed
        };

        // This binding is necessary to make `this` work in the callback
        this.increaseStrength = this.increaseStrength.bind(this);
        this.decreaseStrength = this.decreaseStrength.bind(this);
    }

    increaseStrength() {
        // NOTE: we do not directly change the state since it should be immutable
        // NOTE: we can assign a new value to a property of the state instead of replacing whole state!
        console.log("Before clicking Increase Strength Button");
        console.log(this.state);
        this.setState( state => ({
            strength: state.strength + 5
        }));
        console.log("After clicking Increase Strength Button");
        console.log(this.state);
    }

    decreaseStrength() {
        this.setState( state => ({
            strength: state.strength - 5
        }));
    }

    render(){
        const {hero} = this.props;

        return (
            <div className={"hero-view"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>

                <button onClick={this.increaseStrength}>Increase Strength</button>
                <button onClick={this.decreaseStrength}>Decrease Strength</button>
                {/* NOTE: Now we use 'state' instead of 'props' */}
                <PowerStatsView data={this.state}/>
            </div>
        );
    }
}

export default HeroView