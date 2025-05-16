import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ background: 'yellow', padding: '20px' }}>
        <h2>Component crashed</h2>
        <p>Check console for details</p>
      </div>;
    }
    return this.props.children;
  }
}