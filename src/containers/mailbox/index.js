import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

class Mailbox extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className={"btn btn-primary"} onClick={() => {this.props.changePage()}}> Go Home </button>
                <ul className={"list-group"}>
                    {this.props.mailList.map((mail) =>
                        <li class="list-group-item">{mail.snippet}</li>
                    )}
                </ul>
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
