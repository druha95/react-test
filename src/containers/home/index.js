import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => props.changePage()}>Go mail list</button>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/mailbox')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)