import React from 'react';
import './HelpPage.css';
import Navbar from '../components/Navbar';

function HelpPage() {
  return (
    <>
      <Navbar />
      <div className="help-page">
        <p className="page-eyebrow">Υποστήριξη</p>
        <h2>Βοήθεια και υποστήριξη</h2>
        <p className="page-lead">
          Αν αντιμετωπίζετε τεχνικό ζήτημα ή χρειάζεστε διευκρίνιση για τη χρήση της πλατφόρμας, επικοινωνήστε μαζί μας με έναν από τους παρακάτω τρόπους.
        </p>
        <div className="help-content">
          <p>Περιγράψτε το πρόβλημα όσο πιο συγκεκριμένα γίνεται (συσκευή, browser, βήματα που ακολουθήσατε).</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@nanniesneighborhood.com">support@nanniesneighborhood.com</a>
          </p>
          <p>
            <strong>Τηλέφωνο:</strong>{' '}
            <a href="tel:+302100000000">+30 210 0000000</a>
          </p>
          <p>Θα χαρούμε να σας βοηθήσουμε.</p>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
