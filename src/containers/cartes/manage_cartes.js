import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartesView from '../../components/pages/cartes'
import { components } from 'react-select'

export class ManageCartes extends Component {
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
              <CartesView test ='je suis la Carte'/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(ManageCartes)
