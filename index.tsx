import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    // eslint-disable-next-line no-console
    console.error('Autonamer runtime error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'ui-sans-serif, system-ui' }}>
          <h1 style={{ fontSize: 20, fontWeight: 800 }}>App crashed</h1>
          <p style={{ marginTop: 8, color: '#666' }}>
            This is better than a black screen. Open the browser console for details.
          </p>
          <pre style={{ marginTop: 16, whiteSpace: 'pre-wrap', background: '#111', color: '#eee', padding: 12, borderRadius: 8 }}>
            {String(this.state.error?.message || 'Unknown error')}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
