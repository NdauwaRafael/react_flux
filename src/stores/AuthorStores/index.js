/**
 * Created by Raphael Karanja on 2019-01-07.
 */
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: (callback)=>{
        this.on('change', callback);
    },
    removeChangeListener: (callback)=>{
        this.on('change', callback);
    }
});
