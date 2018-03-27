import * as types from "../actions/userProfile";
import initialState from "./initialState";

export const userProfileReducer = (state = initialState.profile, action) => {
    switch (action.type) {
        case types.GET_PROFILE:
            return action.profile;
        default:
            return state;
    }
};