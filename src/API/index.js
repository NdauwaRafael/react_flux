/**
 * Created by Raphael Karanja on 2019-01-07.
 */
import toastr from 'toastr'

const saveAuthor = (author, baseUrl) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    };

    return fetch(baseUrl, options);
};