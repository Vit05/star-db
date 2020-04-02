import React from "react";
import ItemList from "../item-list";
import {withData} from '../hoc-helpers'
import SwapiService from "../../services/swapi-service";


const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
const PersonList = withData(
                        withChildFunction(
                            ItemList,
                            ({name})=><span>{name}</span>
                        ),
                        getAllPeople
                    );

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(
                        withChildFunction(
                            ItemList,
                            ({name, model})=><span>{name} - ({model})</span>
                        ),
                         getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}