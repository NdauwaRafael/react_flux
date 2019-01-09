/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Component} from 'react';
import AuthorList from './Authorlist/index';
import AuthorStore from '../../Flux/stores/AuthorStores';

class AuthorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
        this._onChange = this._onChange.bind(this);
    };

    componentDidMount() {
        AuthorStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    };

    _onChange() {

    }

    render() {
        const {authors} = this.state;
        return (
            <div className="page_body">
                <AuthorList authors={authors}/>
            </div>
        )
    }
};

export default AuthorPage;