import React, {Component} from 'react';
import AddAuthorForm from './Add'

export default class extends Component {
    state = {
        id: '',
        firstname: '',
        lastname: '',
        email: ''

    };
    render() {
        return (
            <div className="page_body">
                <h5>Manage Authors</h5>
                <AddAuthorForm />
            </div>
        )
    }
}