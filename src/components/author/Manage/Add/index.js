import React from 'react';

export default ({author, onChange}) =>
    <div className="page_body">
        <form>
            <div className="form-group">
                <label htmlFor="authorName">First Name</label>
                <input type="text"
                       value={author.firstname}
                       name="firstname"
                        onChange={onChange}
                       className="form-control"
                       id="authorName"
                       placeholder="Author First Name"/>
            </div>

            <div className="form-group">
                <label htmlFor="authorName">Last Name</label>
                <input type="text"
                       value={author.lastname}
                       name="lastname"
                       onChange={onChange}
                       className="form-control"
                       id="authorName"
                       placeholder="Author Last Name"/>
            </div>

            <div className="form-group">
                <label htmlFor="authorEmail">Email</label>
                <input type="email"
                       value={author.email}
                       onChange={onChange}
                       className="form-control"
                       id="authorEmail"
                       name="email"
                       aria-describedby="emailHelp"
                       placeholder="Author email address"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>