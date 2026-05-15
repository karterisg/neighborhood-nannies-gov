import React from 'react';
import './FAQPage.css';
import Navbar from '../components/Navbar';

function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="faq-page">
        <p className="page-eyebrow">Βοήθεια</p>
        <h2>Συχνές ερωτήσεις</h2>
        <p className="page-lead">Συνοπτικές απαντήσεις στα πιο συνηθισμένα ερωτήματα πριν ξεκινήσετε ή κατά τη χρήση της υπηρεσίας.</p>
        <div className="faq-wrapper">
          <div className="faq-section">
            <h3>Πώς μπορώ να βρω μια νταντά;</h3>
            <p>Μπορείτε να χρησιμοποιήσετε τη σελίδα αναζήτησης μετά τη σύνδεσή σας, ώστε να φιλτράρετε σύμφωνα με τις ανάγκες σας.</p>
          </div>
          <div className="faq-section">
            <h3>Πώς γίνεται η πληρωμή;</h3>
            <p>Η ροή πληρωμής ολοκληρώνεται μέσω της ενότητας πληρωμών της πλατφόρμας, σύμφωνα με τα βήματα που εμφανίζονται μετά τη σύμβαση.</p>
          </div>
          <div className="faq-section">
            <h3>Πώς υπογράφω συμφωνητικό;</h3>
            <p>Από τη σελίδα αίτησης συνεργασίας / σύμβασης ακολουθείτε τα βήματα για ημερομηνίες, κείμενο και αποδοχή όρων πριν την υποβολή.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQPage;
