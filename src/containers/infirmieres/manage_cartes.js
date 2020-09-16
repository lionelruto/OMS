import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import InfirmierecartesView from '../../components/pages/cartes'
import { components } from 'react-select'

export class InfirmiereManageBracelet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        // console.log('test',this.props.test)
        return (
            <div>
                {/* <InfirmiereMainView test = {this.props.test} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    test:'testons les choses'
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(InfirmiereManageBracelet)
