import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {push} from "react-router-redux";

class Mailbox extends React.Component {
    render() {
        return (
            <div>
                {/*<h1>{this.props.mailList[0].snippet}</h1>*/}

                <button onClick={() => {this.props.changePage()}}> Go Home </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

const mapStateToProps = state => {
    return {
        mailList: state.mailListReducer
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mailbox)
