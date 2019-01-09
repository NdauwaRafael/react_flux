/**
 * Created by Raphael Karanja on 2019-01-07.
 */
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';
import _ from 'lodash';
import Store from '../Store';
let _authors = [];
let _dirtyState = false;
let appState;

function reset() {
    appState = {};
}

class AuthorStore extends Store {
    constructor() {
        super();
    }

    getState() {
        return appState;
    }

     getAllAuthors() {
        return _authors;
    }
    getAuthorById(id) {
        return _.find(_authors, {id: id});
    }

    static getDirtyState() {
        return _dirtyState;
    }
}

let authorStoreInstance = new AuthorStore();

authorStoreInstance.dispatchToken = Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.APP_INITIALIZED:
            reset();

        case ActionTypes.CREATE_AUTHOR :
            _authors.push(action.data);
            break;
        case ActionTypes.GET_ALL_AUTHORS:
            _authors = action.data;
            break;
        default:
            return;
    }
    authorStoreInstance.emitChange();
});

export default authorStoreInstance;