import React from 'react';

export default () =>
    <div className="page_body">
        <form>
            <div className="form-group">
                <label htmlFor="authorName">Author Name</label>
                <input type="email" className="form-control" id="authorName"
                       placeholder="Author Name"/>
            </div>

            <div className="form-group">
                <label htmlFor="authorEmail">Author Email</label>
                <input type="email" className="form-control" id="authorEmail" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>