import React from 'react';
import './AboutUsPage.css';
import Navbar from '../components/Navbar';

function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="about-us-page">
        <p className="page-eyebrow">Η ομάδα μας</p>
        <h2>Σχετικά με εμάς</h2>
        <p className="page-lead">
          Είμαστε μια ψηφιακή υπηρεσία που συνδέει γονείς με επαγγελματίες φροντίδας παιδιών — με σαφή βήματα, σεβασμό στην
          ιδιωτικότητα και εστίαση στην πρακτική καθημερινότητά σας.
        </p>
        <div className="about-wrapper">
          <p>
            Η πλατφόρμα «Νταντάδες της Γειτονιάς» σχεδιάστηκε ώστε η αναζήτηση, η επικοινωνία και η οργάνωση συνεργασίας να
            γίνονται με λιγότερη αβεβαιότητα και περισσότερη σαφήνεια για όλους τους εμπλεκόμενους.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
