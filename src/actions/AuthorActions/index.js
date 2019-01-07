import toastr from "toastr";

/**
 * Created by Raphael Karanja on 2019-01-06.
 */
const Dispatcher = require('../../dispatcher');
const ActionTypes = require('../../constants/ActionTypes');

const AuthorActions = {
        createAuthor: (author, baseUrl)=>{
                let options = {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(author)
                };

          // return fetch(baseUrl, options)
          //           .then((response) => {
          //                   let authr = response;
          //                   console.log(authr, response.json())
          //                   this.props.history.push('/authors');
          //                   toastr.success(`Author details were registered successfully.`, {timeOut: 5000});
          //                   this.setState({
          //                           dirty: true
          //                   });
          //           })
          //           .catch((error) => {
          //                   toastr.error('Author Details could not be saved. An Error occurred.', {timeOut: 5000});
          //           })

                Dispatcher.dispatch({
                        actioType: ActionTypes.CREATE_AUTHOR,
                        data: ''
                })
        }
};

export default AuthorActions;