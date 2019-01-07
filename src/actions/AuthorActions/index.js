import toastr from "toastr";

/**
 * Created by Raphael Karanja on 2019-01-06.
 */
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';
import AuthorApis from '../../API'

const AuthorActions = {
    createAuthor: (author, baseUrl) => {
        let newAuthor = AuthorApis.saveAuthor(author, baseUrl);

        Dispatcher.dispatch({
            actioType: ActionTypes.CREATE_AUTHOR,
            data: newAuthor
        })
    }
};

export default AuthorActions;