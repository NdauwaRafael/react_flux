import React, {Component} from 'react';
import AddAuthorForm from './Add';
import toastr from 'toastr'

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
            .then((response) => {
                let authr = response;
                console.log(authr, response.json())
                this.props.history.push('/authors');
                toastr.success(`Author details were registered successfully.`, 'Author Added Successfully', {timeOut: 5000});
            })
            .catch((error) => {
                toastr.error('Author Details could not be saved. An Error occurred.', 'Oops!', {timeOut: 5000});
                console.log('error', error)
            })
    };


    render() {
        const {author} = this.state;
        return (
            <div className="page_body">
                <h5>Manage Authors</h5>
                <AddAuthorForm author={author} onChange={this.handleChange} onSave={this.saveAuthor}/>
            </div>
        )
    }
}