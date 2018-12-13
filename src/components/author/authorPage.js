/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Component} from 'react';
import AuthorList from './Authorlist/index'
class AuthorPage extends  Component {
    constructor(props){
        super(props)
        this.state = {
            authors: []
        }
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