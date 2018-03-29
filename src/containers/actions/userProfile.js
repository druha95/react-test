import 'redux';
import 'react-redux';
import * as _ from 'lodash'
export const GET_PROFILE = 'GET_PROFILE';

const clientId = '408766199131-ioragtbvth5pk9f27j1q3g41mpefujr7.apps.googleusercontent.com';

const getProfileSuccess = (profile) => {
    return {
        type: GET_PROFILE,
        profile
    }
};

const getProfile = () => {
    return dispatch => window.gapi.load('auth2', () => {
        let auth2;
        auth2 = window.gapi.auth2.init({
            client_id: clientId,
            scope: 'profile'
        });

        // Sign the user in, and then retrieve their ID.
        auth2.signIn().then(() => {
            dispatch(getProfileSuccess(auth2.currentUser.get().getBasicProfile()));
        });
    })
};

export const loadProfile = (store) => {
    if(_.isEmpty(store.getState().userProfileReducer)) {
        store.dispatch(getProfile())
    }
};

