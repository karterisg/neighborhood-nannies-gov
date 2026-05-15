import React from 'react';
import './PageShellFallback.css';

/**
 * Εμφανίζεται κατά το code-splitting (React.lazy) μέχρι να φορτώσει το chunk της σελίδας.
 * Δεν επηρεάζει Firebase — η λογική της σελίδας τρέχει αφού mount-άρει το component.
 */
function PageShellFallback() {
  return (
    <div className="page-shell-fallback" role="status" aria-live="polite" aria-busy="true" aria-label="Φόρτωση σελίδας">
      <div className="page-shell-fallback__header" />
      <div className="page-shell-fallback__accent" aria-hidden="true" />
      <div className="page-shell-fallback__body">
        <div className="page-shell-fallback__bar page-shell-fallback__bar--title" />
        <div className="page-shell-fallback__bar" />
        <div className="page-shell-fallback__bar page-shell-fallback__bar--short" />
        <div className="page-shell-fallback__cards">
          <div className="page-shell-fallback__card" />
          <div className="page-shell-fallback__card" />
        </div>
      </div>
    </div>
  );
}

export default PageShellFallback;
