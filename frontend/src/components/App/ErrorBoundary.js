import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}
