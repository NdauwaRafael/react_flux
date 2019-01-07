/**
 * Created by Raphael Karanja on 2019-01-07.
 */
import toastr from 'toastr'

const saveAuthor = (author, baseUrl)=>{
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    };


    return fetch(baseUrl, options)
              .then((response) => {
                      let authr = response;
                      toastr.success(`Author details were registered successfully.`, {timeOut: 5000});
                      return authr;
              })
              .catch((error) => {
                      toastr.error('Author Details could not be saved. An Error occurred.', {timeOut: 5000});
                      return {};
              })
};