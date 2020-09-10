import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfirmiereMainView from '../../components/pages/infirmieres'
import { components } from 'react-select'


export class InfirmiereMain extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div>
                <InfirmiereMainView test = 'testons les choses'/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InfirmiereMain)
