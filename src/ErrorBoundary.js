import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Unexpected exception [${this.props.name}]`, error);
    return this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error</h2>;
    }
    return this.props.children;
  }
}
