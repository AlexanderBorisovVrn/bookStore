import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    error: false
  }
 
  componentDidCatch() {
    this.setState({erorr: true})
  }
  render() {
    const {error} = this.state;
    if (!error) {
      return this.props.children;
    } else {
      return <ErrorIndicator/>
    }
  }
}