/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, { PropTypes } from 'react';

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
            </tr>
        )
    };

    return (
        <div>
            <h1>Authors</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        </div>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};
export default AuthorList;