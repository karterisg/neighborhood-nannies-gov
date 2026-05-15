import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="error-boundary__panel">
            <h1 className="error-boundary__title">Παρουσιάστηκε πρόβλημα</h1>
            <p className="error-boundary__text">
              Η εφαρμογή αντιμετώπισε μη αναμενόμενο σφάλμα. Μπορείτε να ανανεώσετε τη σελίδα. Τα δεδομένα στο cloud
              παραμένουν ως έχουν — επικοινωνήστε με την υποστήριξη αν το πρόβλημα συνεχίζεται.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="error-boundary__pre">{String(this.state.error)}</pre>
            )}
            <button type="button" className="error-boundary__btn" onClick={this.handleReload}>
              Ανανέωση σελίδας
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
