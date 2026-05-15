import React from 'react';
import './GovContentSkeleton.css';

function GovContentSkeleton({ ariaLabel = 'Φόρτωση…' }) {
  return (
    <div className="gov-skeleton" role="status" aria-live="polite" aria-busy="true" aria-label={ariaLabel}>
      <div className="gov-skeleton__title" />
      <div className="gov-skeleton__row gov-skeleton__row--long" />
      <div className="gov-skeleton__row gov-skeleton__row--medium" />
      <div className="gov-skeleton__grid">
        <div className="gov-skeleton__card" />
        <div className="gov-skeleton__card" />
        <div className="gov-skeleton__card" />
      </div>
      <span className="gov-skeleton__sr">{ariaLabel}</span>
    </div>
  );
}

export default GovContentSkeleton;
