/**
 * Created by Raphael Karanja on 2019-01-09.
 */
import AuthorApi from '../../../API'
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';

export default {
    async initApp(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE_APP,
            initData: await (await (await (fetch('http://localhost:3004/authors')))).json()
        })
    }
}