export default class SwapiService {
    _apiBase = 'https://swapi.co/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`couldn\'t fetch ${url}` +
                `, receive ${res.status}`)
        }
        return await res.json()
    }

    //PEARSON
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        console.log(this._transformPerson(person));
        return this._transformPerson(person)
    }

    //PLANETS
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    //STARSHIPS
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        console.log(this._transformStarship(starship));

        return this._transformStarship(starship)
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    _extractID = (item) => {
        const isRegExp = /\/([0-9]*)\/$/;
        return item.url.match(isRegExp)[1]
    }


    _transformPlanet = (planet) => {
        return {
            id: this._extractID(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractID(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractID(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eye_color
        }
    }
}