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
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let author = this.state.author;
        author[field] = value;
        this.setState({author});
    };

    saveAuthor(event) {

    };

    render() {
        const {author} = this.state;
        return (
            <div className="page_body">
                <h5>Manage Authors</h5>
                <AddAuthorForm author={author} onChange={this.handleChange}/>
            </div>
        )
    }
}