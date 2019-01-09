/**
 * Created by Raphael Karanja on 2019-01-07.
 */

let saveAuthor = function (author, baseUrl) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    };

    return fetch(baseUrl, options);
};

let getAllAuthors =  async function () {
    return await (await (await (fetch('http://localhost:3004/authors')))).json();
};

export default {
    saveAuthor,
    getAllAuthors
};