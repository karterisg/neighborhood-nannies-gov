import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingPage.css';
import Navbar from '../components/Navbar';

function OnboardingParentPage() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/search-nannies');
  };
  return (
    <>
      <Navbar />
      <div className="onboarding-layout">
        <div className="onboarding-page">
          <p className="page-eyebrow">Ξεκινάμε</p>
          <h2>Καλώς ήρθατε, γονείς</h2>
          <p className="page-lead">Μια σύντομη επισκόπηση βημάτων πριν μπείτε στην αναζήτηση.</p>
          <div className="onboarding-content">
            <p>1. Δημιουργήστε λογαριασμό.</p>
            <p>2. Αναζητήστε νταντάδες που ταιριάζουν στα κριτήριά σας.</p>
            <p>3. Επικοινωνήστε και κλείστε ραντεβού.</p>
            <p>4. Υπογράψτε τη σύμβαση εργασίας.</p>
            <p>5. Ολοκληρώστε την πληρωμή μέσω των διαθέσιμων εργαλείων.</p>
            <button type="button" onClick={handleNext} className="next-button">
              Επόμενο
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnboardingParentPage;
