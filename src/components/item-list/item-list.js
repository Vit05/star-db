import React, {Component} from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    // swapiService = new SwapiService();
    state = {
        itemList: null
    };

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const value = this.props.renderItem(item);
            return (
                <li key={id} className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {value}
                </li>
            )
        })
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }


    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}