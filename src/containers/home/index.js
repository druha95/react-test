import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';


class Home extends React.Component {
    render() {
        return <div className={"home-page"}>
            <h1>Welcome {this.props.profile.ig}!</h1>
            <button type="button" className={"btn btn-primary"} onClick={() => this.props.changePage()}>Go mail list</button>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/mailbox')
}, dispatch);

const mapStateToProps = state => {
    return {
        profile: state.userProfileReducer
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)