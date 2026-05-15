import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorksPage.css';
import Navbar from '../components/Navbar';

function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <div className="how-it-works-page">
        <p className="page-eyebrow">Οδηγός</p>
        <h2>Πώς λειτουργεί</h2>
        <p className="page-lead">
          Μια συνοπτική ροή βημάτων για γονείς και για επαγγελματίες — από την εγγραφή μέχρι την αξιολόγηση μετά την υπηρεσία.
        </p>

        <div className="steps-section">
          <h3>Για γονείς και κηδεμόνες</h3>
          <ol>
            <li><strong>Εγγραφή:</strong> Δημιουργείτε λογαριασμό στην πλατφόρμα.</li>
            <li><strong>Αναζήτηση:</strong> Φιλτράρετε νταντάδες σύμφωνα με τα κριτήριά σας.</li>
            <li><strong>Επικοινωνία:</strong> Συντονίζεστε με τις επιλογές σας.</li>
            <li><strong>Κράτηση:</strong> Προγραμματίζετε συνάντηση.</li>
            <li><strong>Σύμβαση:</strong> Οριστικοποιείτε τη συμφωνία με την επιλεγμένη νταντά.</li>
            <li><strong>Πληρωμή:</strong> Ολοκληρώνετε την πληρωμή μέσω των διαθέσιμων εργαλείων.</li>
            <li><strong>Αξιολόγηση:</strong> Καταχωρείτε την εμπειρία σας μετά την υπηρεσία.</li>
          </ol>
        </div>

        <div className="steps-section">
          <h3>Για νταντάδες και επαγγελματίες</h3>
          <ol>
            <li><strong>Εγγραφή:</strong> Δημιουργείτε το προφίλ σας.</li>
            <li><strong>Αγγελία:</strong> Αναρτάτε λεπτομερή αγγελία.</li>
            <li><strong>Κρατήσεις:</strong> Επικοινωνείτε και επιβεβαιώνετε ραντεβού.</li>
            <li><strong>Σύμβαση:</strong> Ολοκληρώνετε τη σύμβαση με τον γονέα.</li>
            <li><strong>Κουπόνια:</strong> Παραλαμβάνετε/επιβεβαιώνετε τα σχετικά βήματα.</li>
            <li><strong>Πληρωμή:</strong> Ολοκληρώνετε την επιβεβαίωση όπου απαιτείται.</li>
            <li><strong>Αξιολογήσεις:</strong> Λαμβάνετε χρήσιμα σχόλια για τη δουλειά σας.</li>
          </ol>
        </div>
        <p className="how-footer">
          Για λεπτομέρειες δείτε τις <Link to="/faq">συχνές ερωτήσεις (FAQ)</Link>.
        </p>
      </div>
    </>
  );
}

export default HowItWorksPage;
