import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfirmiereMainView from '../../components/pages/infirmieres/index'
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
                <InfirmiereMainView test ={this.props.test}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state:',state)
    return {
        test:'feterete'
    }
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(InfirmiereMain)
