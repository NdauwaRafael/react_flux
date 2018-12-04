import React, {Component} from 'react';
import Header from './header/headerPage'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron">
                    <div className="container">
                        <h2>Hello!! Homepage</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
