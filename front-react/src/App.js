// react
import React, {Component} from 'react';

// components
import RestaurantsComponent from "./components/RestaurantsComponent";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <RestaurantsComponent/>
            </div>
        )
    }
}

export default App;
