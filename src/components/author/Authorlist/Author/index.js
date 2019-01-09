/**
 * Created by Raphael Karanja on 2019-01-04.
 */
import React, {Component} from 'react';
import AuthorStore from '../../../../Flux/stores/AuthorStores';
import AuthorActions from '../../../../Flux/actions/AuthorActions'
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {},
            authorId: this.props.match.params.id
        };
        this._onChange = this._onChange.bind(this);
        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.redirect = this.redirect.bind(this);
    }

     componentDidMount() {
         this.getAuthor();
         AuthorStore.addChangeListener(this._onChange);
     }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    };

    _onChange() {
        this.getAuthor();
        this.redirect();
    }

    redirect(){
        if(!this.author) {
            this.props.history.push('/authors');
        }
    }

    getAuthor(){
        let {authorId} =this.state;
        if (authorId) {
            let author = AuthorStore.getAuthorById(authorId);
            this.setState({author});
        }
    }

    deleteAuthor(){
        let {authorId} =this.state;
        if(authorId){
            AuthorActions.deleteAuthor(authorId)
        }

    }

    render() {
        const {author} = this.state;
        return(
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>eMail</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{author.firstname}</td>
                        <td>{author.lastname}</td>
                        <td>{author.email}</td>
                        <td>
                            <button type="button" className="btn btn-outline-info btn-sm ">Edit</button>

                            <button type="button" className="btn btn-outline-danger btn-sm " onClick={this.deleteAuthor}>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}