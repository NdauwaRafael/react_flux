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
            baseUrl: 'http://localhost:3004/authors',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
        this.authorIsValid = this.authorIsValid.bind(this);
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let author = this.state.author;
        author[field] = value;
        this.setState({author});
    };

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    }

    authorIsValid() {
        let {author, errors} = this.state;
        let isValid = true;

        if(author.firstname.length <= 3){
            errors.firstname = 'Author First Name must be at least 3 characters';
            isValid = false;
        }

        if(author.lastname.length <= 3){
            errors.lastname = 'Author Last Name must be at least 3 characters';
            isValid = false;
        }

        if(!this.emailIsValid(author.email) ){
            errors.email = 'Enter a valid Email';
            isValid = false;
        }

        this.setState({errors});

        return isValid;

    };

    saveAuthor(event) {
        event.preventDefault();
            console.log(this.state.errors);
        if (!this.authorIsValid()) {
            return;
        }
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
                toastr.success(`Author details were registered successfully.`, {timeOut: 5000});
            })
            .catch((error) => {
                toastr.error('Author Details could not be saved. An Error occurred.', {timeOut: 5000});
                console.log('error', error)
            })
    };


    render() {
        const {author, errors} = this.state;
        return (
            <div className="page_body">
                <h5>Manage Authors</h5>
                <AddAuthorForm author={author} onChange={this.handleChange} onSave={this.saveAuthor} errors={errors}/>
            </div>
        )
    }
}