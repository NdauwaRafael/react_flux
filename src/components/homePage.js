import React, {Component} from 'react';
import Header from './header/headerPage'
import Authors from './author/authorPage'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="card">
                    <div className="container">
                        <h2>Hello!! Homepage</h2>
                        <Authors />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
