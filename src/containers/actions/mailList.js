import * as _ from "lodash";

export const GET_MAIL_LIST = 'GET_MAIL_LIST';

const API_KEY = 'UlU6LcuxsDxcCG6Bt4rho91q';
const clientId = '408766199131-ioragtbvth5pk9f27j1q3g41mpefujr7.apps.googleusercontent.com';
const scopes = ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.readonly'];

const getMailListSuccess = (mailList) => {
    return {
        type: GET_MAIL_LIST,
        mailList
    }
};

export const getMailList = (store) => {

    if(!_.isEmpty(store.getState().mailListReducer)) return dispatch => dispatch(getMailListSuccess(store.getState().mailListReducer));


    return dispatch => window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.request({
            path: 'https://www.googleapis.com/gmail/v1/users/me/threads',
            method: 'GET'
        }).then((data) => {
            dispatch(getMailListSuccess(data.threads));
        })
    });

};