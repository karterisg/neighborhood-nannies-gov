import React from 'react';
import Navbar from './Navbar';
import GovContentSkeleton from './GovContentSkeleton';

/**
 * Πλαίσιο εμφάνισης (header + περιοχή περιεχομένου). Δεν αλλάζει λογική Firebase.
 * Χρησιμοποιήστε loading ή error — όχι και τα δύο ταυτόχρονα.
 */
function GovPageFrame({ children, loading, loadingLabel = 'Φόρτωση…', error }) {
  let body;
  if (error) {
    body = (
      <div className="gov-callout gov-callout--error">
        <p className="error-message">{error}</p>
      </div>
    );
  } else if (loading) {
    body = <GovContentSkeleton ariaLabel={loadingLabel} />;
  } else {
    body = children;
  }

  return (
    <>
      <Navbar />
      <div className="gov-page-frame">{body}</div>
    </>
  );
}

export default GovPageFrame;
