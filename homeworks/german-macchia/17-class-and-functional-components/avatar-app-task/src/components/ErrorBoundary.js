import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <div className="errorBoundary__info">
            <h2>Something went wrong</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
              <br />
              {this.state.error.toString()}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
