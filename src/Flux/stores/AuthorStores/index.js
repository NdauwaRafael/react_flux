/**
 * Created by Raphael Karanja on 2019-01-07.
 */
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import _ from 'lodash';
import Store from '../Store';

const CHANGE_EVENT = 'change';
let _authors = [];
let _dirtyState = false;
const AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: (callback) => {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: (callback) => {
        this.on(CHANGE_EVENT, callback);
    },
    emitChange: () => {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: () => {
        return _authors;
    },
    getAuthorById: (id) => {
        return _.find(_authors, {id: id});
    },
    getDirtyState() {
        return _dirtyState;
    }
});
Dispatcher.register((action) => {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR :
            _authors.push(action.data);
            AuthorStore.emitChange();
            break;
        case ActionTypes.GET_ALL_AUTHORS:
            _authors = action.data;
            AuthorStore.emitChange();
            break;
    }
});

export default AuthorStore;

let appState;

function reset() {
    appState = {};
}
class AuthorStore extends Store {
    
}
