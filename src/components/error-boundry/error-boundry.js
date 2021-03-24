import React, {Component} from 'react';

export default class ErrorBoundry extends Component {
  state = {
    error: false
  }
  constructor(props) {
    this.props.children = props.children
  }
  componentDidCatch() {
    this.setState({erorr: true})
  }
  render() {
    const {error} = this.state;
    if (!error) {
      return this.props.children;
    } else {
      return <Error/>
    }
  }
}