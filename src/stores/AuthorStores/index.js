/**
 * Created by Raphael Karanja on 2019-01-07.
 */
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';
import {EventEmitter} from 'events';
import assign from 'object-assign';
const CHANGE_EVENT = 'change';

const AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: (callback)=>{
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: (callback)=>{
        this.on(CHANGE_EVENT, callback);
    },
    emitChange: ()=>{
        this.emit(CHANGE_EVENT);
    }
});
Dispatcher.register((action)=>{

});