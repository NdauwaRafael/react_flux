import React, {Component} from 'react';
import Header from "../Layout/Header";
import Categories from './Categories'

class HomePage extends Component {
    render() {
        return (
            <div className="homepage__content">
                <Header/>
                <Categories />
            </div>
        );
    }
}

export default HomePage;
