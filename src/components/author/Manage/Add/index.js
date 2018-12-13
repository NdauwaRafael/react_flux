import React from 'react';

export default () =>
    <div className="page_body">
        <form>
            <div className="form-group">
                <label htmlFor="authorName">First Name</label>
                <input type="text"
                       className="form-control"
                       id="authorName"
                       placeholder="Author First Name"/>
            </div>

            <div className="form-group">
                <label htmlFor="authorName">Last Name</label>
                <input type="text"
                       className="form-control"
                       id="authorName"
                       placeholder="Author Last Name"/>
            </div>

            <div className="form-group">
                <label htmlFor="authorEmail">Email</label>
                <input type="email"
                       className="form-control"
                       id="authorEmail"
                       aria-describedby="emailHelp"
                       placeholder="Author email address"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>