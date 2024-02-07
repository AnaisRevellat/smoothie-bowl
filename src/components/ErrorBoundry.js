import React, { Component } from "react";

class ErrorBoudry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info){
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError){
        return <h1 style={{color:'orange', fontSize: '3rem', background:'black'}}>Oooops. Something went wrong</h1>
    }
   return this.props.children
  }
}

export default ErrorBoudry;
