// import external modules
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class SimpleRoute extends React.Component {
  componentWillMount() {
    window.browserHistory = this.props.history;
  }

  componentWillReceiveProps(nextProps) {
    window.browserHistory = nextProps.history;
  }

  render() {
    const { render, ...rest } = this.props;
    // console.log(this.props)
    return <Route {...rest} render={(matchProps) => render(matchProps)} />;
  }
}
