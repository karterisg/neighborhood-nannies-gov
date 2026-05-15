import React from 'react';
import './ContactUsPage.css';
import Navbar from '../components/Navbar';

function ContactUsPage() {
  return (
    <>
      <Navbar />
      <div className="contact-us-page">
        <p className="page-eyebrow">Επικοινωνία</p>
        <h2>Στείλτε μας μήνυμα</h2>
        <p className="page-lead">
          Συμπληρώστε τη φόρμα και η ομάδα μας θα επανέλθει όσο πιο σύντομα γίνεται. Δεν απαιτείται λογαριασμός για αυτή τη φόρμα.
        </p>
        <div className="contact-wrapper">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required autoComplete="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Μήνυμα</label>
              <textarea id="message" required rows={5} />
            </div>
            <button type="submit">Αποστολή</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
