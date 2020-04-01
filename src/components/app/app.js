import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './app.css';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import {Record} from "../item-details/item-details";
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-components";

/*export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch()');
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null
        return (
            <div className='container'>
                <Header/>
                {planet}


                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet22
                    </button>

                    <ErrorButton />
                </div>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
                {/!*<div className="row mb2">*!/}
                {/!*    <div className="col-md-6">*!/}
                {/!*        <ItemList onItemSelected={this.onPersonSelected}/>*!/}
                {/!*    </div>*!/}
                {/!*    <div className="col-md-6">*!/}
                {/!*        <PersonDetails personId={this.state.selectedPerson}/>*!/}
                {/!*    </div>*!/}
                {/!*</div>*!/}
            </div>
        );
    }

};*/


export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="stardb-app">
                <div className="container">
                    <Header/>


                    <div className="row mb2">
                        <div className="col-md-6">
                            <PersonList>
                                {({name}) => <span>{name}</span>}
                            </PersonList>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails itemId={11}/>
                        </div>
                    </div>

                    <div className="row mb2">
                        <div className="col-md-6">
                            <StarshipList>
                                {({name}) => <span>{name}</span>}
                            </StarshipList>
                        </div>
                        <div className="col-md-6">
                            <StarshipDetails itemId={9}/>
                        </div>
                    </div>

                    <div className="row mb2">
                        <div className="col-md-6">
                            <PlanetList>
                                {({name}) => <span>{name}</span>}
                            </PlanetList>
                        </div>
                        <div className="col-md-6">
                            <PlanetDetails itemId={5}/>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}