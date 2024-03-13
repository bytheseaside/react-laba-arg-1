import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error: error,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>{this.state.error.toString()}</details>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
