import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Unexpected exception [${this.props.name}]`, error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error</h2>;
    }
    return this.props.children;
  }
}
