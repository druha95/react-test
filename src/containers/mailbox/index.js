import React from 'react'

const API_KEY = 'UlU6LcuxsDxcCG6Bt4rho91q';
const clientId = '408766199131-ioragtbvth5pk9f27j1q3g41mpefujr7.apps.googleusercontent.com';

export class Mailbox extends React.Component {

    scopes = ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.readonly'];

    loadYoutubeApi() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";

        script.onload = () => {
            window.gapi.load('client', () => {
                debugger;
                window.gapi.client.setApiKey(API_KEY);
                window.gapi.auth.authorize({
                    client_id: clientId,
                    scope: this.scopes,
                    immediate: false
                }, this.handleAuthResult.bind(this));
                // window.gapi.client.load('youtube', 'v3', () => {
                //     this.setState({ gapiReady: true });
                // });
            });
        };

        document.body.appendChild(script);
    }

    handleAuthResult(result) {
        debugger;
        window.gapi.client.load('gmail', 'v2', this.displayInbox);
    }

    displayInbox(result) {
        debugger;
    }

    componentDidMount() {
        this.loadYoutubeApi();
    }

    render() {

        // if (this.state.gapiReady) {
            return (
                <h1>GAPI is loaded and ready to use.</h1>
            );
        // }
    }
};
