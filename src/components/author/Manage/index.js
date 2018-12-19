import React, {Component} from 'react';
import AddAuthorForm from './Add'

export default class extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            author: {
                id: '',
                firstname: '',
                lastname: '',
                email: ''
            },
            baseUrl: 'http://localhost:3004/authors'
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let author = this.state.author;
        author[field] = value;
        this.setState({author});
    };

    saveAuthor(event) {
        event.preventDefault();
        const {baseUrl, author} = this.state;
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        };

        return fetch(baseUrl, options)
            .then((response) => response.json)
    };


    render() {
        const {author} = this.state;
        return (
            <div className="page_body">
                <h5>Manage Authors</h5>
                <AddAuthorForm author={author} onChange={this.handleChange} save={this.saveAuthor}/>
            </div>
        )
    }
}