import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    constructor() {

    }

    render() {
        return (
            <React.Fragment>
                <div>Hello!</div>
            </React.Fragment>
        )
    }


}

export default connect(mapStateToProps)(Home)
