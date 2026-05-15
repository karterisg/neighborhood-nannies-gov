import React from 'react';
import './EligibilityPage.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function EligibilityPage() {
  return (
    <>
      <Navbar />
      <div className="eligibility-page">
        <p className="page-eyebrow">Πριν την εγγραφή</p>
        <h2>Κριτήρια επιλεξιμότητας</h2>
        <p className="page-lead">
          Βεβαιωθείτε ότι πληροίτε τις βασικές προϋποθέσεις για τη χρήση της υπηρεσίας — ως γονέας/κηδεμόνας ή ως επαγγελματίας φροντίδας.
        </p>

        <div className="criteria-section">
          <h3>Για γονείς και κηδεμόνες</h3>
          <ul>
            <li>Πρέπει να είστε νόμιμος κηδεμόνας ή γονέας παιδιού που χρειάζεται φροντίδα.</li>
            <li>Πρέπει να αποδέχεστε τους όρους χρήσης της πλατφόρμας.</li>
            <li>Πρέπει να μπορείτε να ολοκληρώσετε την πληρωμή μέσω των διαθέσιμων μηχανισμών (π.χ. ψηφιακά κουπόνια, όπου εφαρμόζεται).</li>
            <li>Απαιτείται ενεργός λογαριασμός χρήστη.</li>
          </ul>
        </div>

        <div className="criteria-section">
          <h3>Για νταντάδες και επαγγελματίες</h3>
          <ul>
            <li>Πρέπει να είστε άνω των 18 ετών.</li>
            <li>Πρέπει να διαθέτετε σχετική εμπειρία ή προσόντα στη φροντίδα παιδιών.</li>
            <li>Πρέπει να αποδέχεστε τους όρους χρήσης της πλατφόρμας.</li>
            <li>Απαιτείται ενεργός λογαριασμός χρήστη.</li>
          </ul>
        </div>
        <p className="eligibility-footer">
          Αν πληροίτε τις προϋποθέσεις, συνεχίστε στην{' '}
          <Link to="/register">εγγραφή</Link>.
        </p>
      </div>
    </>
  );
}

export default EligibilityPage;
