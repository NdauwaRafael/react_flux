/**
 * Created by Raphael Karanja on 2019-01-04.
 */
import React, {Component} from 'react';
import AuthorActions from '../../../actions/AuthorActions';
import AuthorStore from '../../../stores/AuthorStores';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    async componentWillMount() {
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