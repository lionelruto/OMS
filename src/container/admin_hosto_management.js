import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class AdminHostoListView extends Component {
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
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHostoListView)
