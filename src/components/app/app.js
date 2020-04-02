import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from "../swapi-service-context";
import './app.css';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-components";


export default class App extends Component {
    swapiService = new SwapiService()

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
            <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <div className="container">
                        <Header/>


                        <div className="row mb2">
                            <div className="col-md-6">
                                <PersonList/>
                            </div>
                            <div className="col-md-6">
                                <PersonDetails itemId={11}/>
                            </div>
                        </div>

                        <div className="row mb2">
                            <div className="col-md-6">
                                <StarshipList/>
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
            </SwapiServiceProvider>
        );
    }
}