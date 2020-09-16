import React, { Component } from 'react';

class Main extends Component {
    render() {
        console.log(this.props.test)
        return (
            <div>
                Hello World
                {this.props.test}
            </div>
        );
    }
}

export default Main;