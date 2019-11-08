import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <React.Fragment>
                <div>Hello!</div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Home)
