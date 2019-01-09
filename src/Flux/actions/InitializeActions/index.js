/**
 * Created by Raphael Karanja on 2019-01-09.
 */
import AuthorApi from '../../../API'
import Dispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes';

export default {
    initApp(){
        Dispatcher.dispatch({
           acitonType: ActionTypes.INITIALIZE_APP,
            initData: AuthorApi.getAllAuthors()
        })
    }
}