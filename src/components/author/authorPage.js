/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Component} from 'react';
import AuthorList from './authorlist/authorList'
class Authors extends  Component {
    constructor(props){
        super(props)
        this.state = {
            authors: []
        }
    };

    componentDidMount(){
        if(this.isMounted()){

        }
    };

    render(){
        const {authors} = this.state;
        return (
            <AuthorList authors={authors} />
        )
    }
}