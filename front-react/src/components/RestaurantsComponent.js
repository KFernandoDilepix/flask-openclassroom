import React, {Component} from 'react';

import {getAllRestaurants} from '../api/restaurantsAPI';

import '../scss/RestaurantsComponent.scss';

class RestaurantsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: null
        }
    }

    async componentWillMount() {
        const data = await getAllRestaurants(10);

        this.setState({loading: false, data: data});
    }

    renderRestaurants = () => {
        const {data} = this.state;

        return (
            <div className="Restaurants">
                {data.map((restau) => {
                    return (
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png"
                                         alt="Placeholder image"/>
                                </figure>
                            </div>

                            <div className="card-content">
                                <div className="content">
                                    <p className="title is-5">{restau.name}</p>
                                    <p>
                                        Cusine: {restau.cuisine} <br/>
                                        Borough: {restau.borough}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    };

    render() {
        if (this.state.loading) {
            return <h1>Loading ...</h1>
        }

        else {
            return (
                <div>
                    {this.renderRestaurants()}
                </div>
            );
        }
    }
}

export default RestaurantsComponent;