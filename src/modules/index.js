import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {userProfileReducer} from "../containers/reducers/userProfileReducer";
import {mailListReducer} from "../containers/reducers/mailListReducer";

export default combineReducers({
    routing: routerReducer,
    userProfileReducer: userProfileReducer,
    mailListReducer: mailListReducer
})