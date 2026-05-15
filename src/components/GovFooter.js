import React from 'react';
import { Link } from 'react-router-dom';
import './GovFooter.css';

function GovFooter() {
  return (
    <footer className="gov-site-footer" role="contentinfo">
      <div className="gov-site-footer__accent" aria-hidden="true" />
      <div className="gov-site-footer__inner">
        <div className="gov-site-footer__brand">
          <span className="gov-site-footer__title">Νταντάδες της Γειτονιάς</span>
          <span className="gov-site-footer__meta">Διεπαφή ευθυγραμμισμένη με τις οδηγίες εμφάνισης δημόσιων υπηρεσιών (gov.gr).</span>
        </div>
        <nav className="gov-site-footer__links" aria-label="Σύνδεσμοι υποστηρικτικού περιεχομένου">
          <a href="https://www.gov.gr/" target="_blank" rel="noopener noreferrer">Επίσημο gov.gr</a>
          <Link to="/help">Βοήθεια</Link>
          <Link to="/about-us">Σχετικά</Link>
          <Link to="/faq">Συχνές ερωτήσεις</Link>
        </nav>
      </div>
    </footer>
  );
}

export default GovFooter;
