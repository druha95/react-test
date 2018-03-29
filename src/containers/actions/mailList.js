import * as _ from "lodash";

export const GET_MAIL_LIST = 'GET_MAIL_LIST';

const API_KEY = 'UlU6LcuxsDxcCG6Bt4rho91q';

const getMailListSuccess = (mailList) => {
    return {
        type: GET_MAIL_LIST,
        mailList
    }
};

const getMailList = (store) => {
    return dispatch => window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.request({
            path: 'https://www.googleapis.com/gmail/v1/users/me/threads',
            method: 'GET'
        }).then((data) => {
            debugger;
            dispatch(getMailListSuccess(data.result.threads));
        })
    });

};

export const loadMailList = (store) => {
    if(_.isEmpty(store.getState().mailListReducer)) {
        store.dispatch(getMailList(store));
    }
};