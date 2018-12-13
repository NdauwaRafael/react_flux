/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React from 'react';

const AuthorList = ({authors}) => {
    let createAuthorRow = (author)=>{
        return (
            <tr>
                <td>
                    <a href={"/author" + author.id}>{author.id}</a>
                </td>
                <td>
                    {author.firstname} {author.lastname}
                </td>
                <td>
                    View
                </td>
            </tr>
        )
    };

    return (
        <div>
            <h1>Authors</h1>
            <div className="card">
                <div className="card-header text-right">
                    <button type="button" className="btn btn-outline-primary btn-sm">
                        Add Author
                    </button>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {authors.map(createAuthorRow, this)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

AuthorList.propTypes = {
    // authors: PropTypes.array.isRequired
};
export default AuthorList;