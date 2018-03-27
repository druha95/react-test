import initialState from "./initialState";
import * as types from "../actions/mailList";

export const mailListReducer = (state = initialState.mailList, action) => {
    switch (action.type) {
        case types.GET_MAIL_LIST:
            return action.mailList;
        default:
            return state;
    }
};