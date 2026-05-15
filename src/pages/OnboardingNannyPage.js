import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingPage.css';
import Navbar from '../components/Navbar';

function OnboardingNannyPage() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/nanny-dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="onboarding-layout">
        <div className="onboarding-page">
          <p className="page-eyebrow">Ξεκινάμε</p>
          <h2>Καλώς ήρθατε, επαγγελματίες</h2>
          <p className="page-lead">Βασικά βήματα για να αξιοποιήσετε την πλατφόρμα ως νταντά.</p>
          <div className="onboarding-content">
            <p>1. Δημιουργήστε το προφίλ σας.</p>
            <p>2. Αναρτήστε αγγελία με σαφείς λεπτομέρειες.</p>
            <p>3. Επιβεβαιώνετε κρατήσεις από ενδιαφερόμενους γονείς.</p>
            <p>4. Υπογράφετε σύμβαση με τον επιλεγμένο γονέα.</p>
            <p>5. Ολοκληρώνετε τα βήματα επιβεβαίωσης κουπονιών / πληρωμής.</p>
            <button type="button" onClick={handleNext} className="next-button">
              Επόμενο
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnboardingNannyPage;
