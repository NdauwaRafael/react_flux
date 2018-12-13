import React, {Component} from 'react';
import AddAuthorForm from './Add'

export default class extends Component {
    state = {
        author: {
            id: '',
            firstname: '',
            lastname: '',
            email: ''
        }
    };

    handleChange(event){
        let field = event.target.name;
        let value = event.target.value;
        let author = {};
        author[field] = value;
        this.setState({author});
    };
    render() {
        const {author} = this.state
        return (
            <div className="page_body">
                <h5>Manage Authors</h5>
                <AddAuthorForm author={author}/>
            </div>
        )
    }
}