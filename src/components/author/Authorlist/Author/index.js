/**
 * Created by Raphael Karanja on 2019-01-04.
 */
import React, {Component} from 'react';
import AuthorActions from '../../../../Flux/actions/AuthorActions';
import AuthorStore from '../../../../Flux/stores/AuthorStores';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {},
            authorsUrl: 'http://localhost:3004/authors'
        }
    }

     componentWillMount() {
        let authors = AuthorStore.getAllAuthors();
        if(authors.length === 0){
            this.getAthors();
        }else{
            setTimeout(()=>{
                this.getAuthor();
            }, 2000)
        }
        
    }

    getAthors(){
        AuthorActions.getAuthors(this.state.authorsUrl);
        setTimeout(()=>{
            this.getAuthor();
        }, 200)
    }

    getAuthor(){
        let authorId = this.props.match.params.id;
        if (authorId) {
            let author = AuthorStore.getAuthorById(authorId);
            this.setState({author});
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
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{author.firstname}</td>
                        <td>{author.lastname}</td>
                        <td>{author.email}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}