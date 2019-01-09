/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Component} from 'react';
import AuthorList from './Authorlist/index';
import AuthorActions from '../../../actions/AuthorActions';
import AuthorStore from '../../../stores/AuthorStores';

class AuthorPage extends  Component {
    constructor(props){
        super(props)
        this.state = {
            authors: []
        }
    };
    async componentDidMount() {
        const authors = await (await fetch('http://localhost:3004/authors') ).json();
        this.setState({authors});
    };

    render(){
        const {authors} = this.state;
        return (
            <div className="page_body">
                <AuthorList authors={authors} />
            </div>
        )
    }
};

export default AuthorPage;