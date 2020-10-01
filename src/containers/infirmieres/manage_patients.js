import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfirmiereMainView from '../../components/pages/infirmieres'
import { components } from 'react-select'


export class InfirmiereManagePatient extends Component {
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
                <InfirmiereMainView 
            
                
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    test:'jeteste mon truck'
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(InfirmiereManagePatient)
