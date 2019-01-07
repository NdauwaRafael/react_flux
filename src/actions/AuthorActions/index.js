/**
 * Created by Raphael Karanja on 2019-01-06.
 */
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';
import AuthorApis from '../../API'
import toastr from "toastr";

const AuthorActions = {
    createAuthor: (author, baseUrl) => {
        let newAuthor = AuthorApis.saveAuthor(author, baseUrl)
            .then((response) => {
                toastr.success(`Author details were registered successfully.`, {timeOut: 5000});
                return response;
            })
            .catch((error) => {
                toastr.error('Author Details could not be saved. An Error occurred.', {timeOut: 5000});
                toastr.error('Error', error, {timeOut: 5000});
                return {};
            });

        Dispatcher.dispatch({
            actioType: ActionTypes.CREATE_AUTHOR,
            data: newAuthor
        })
    }
};

export default AuthorActions;