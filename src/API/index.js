/**
 * Created by Raphael Karanja on 2019-01-07.
 */

let saveAuthor = function(author, baseUrl)  {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    };

    return fetch(baseUrl, options);
};

export default {
    saveAuthor
};