import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const clientId = '408766199131-ioragtbvth5pk9f27j1q3g41mpefujr7.apps.googleusercontent.com';


class Home extends React.Component {
    render() {
        return <div>
            <p>Welcome {this.props.profile.ig}!</p>
            <button onClick={() => this.props.changePage()}>Go mail list</button>
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
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)