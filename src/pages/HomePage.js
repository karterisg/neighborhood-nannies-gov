import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from '../assets/logo.png';

function IconShield() {
  return (
    <svg className="home-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="home-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="home-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg className="home-icon home-icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l1.09 6.26L20 9l-6.91 1.74L12 18l-1.09-6.26L4 9l6.91-1.74L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function HomePage() {
  const govLogo = `${process.env.PUBLIC_URL}/Gov.gr_logo.png`;

  return (
    <div className="home-page">
      <div className="home-hero-wrap">
        <div className="home-hero-bg" aria-hidden="true">
          <div className="home-hero-bg__mesh" />
          <div className="home-hero-bg__glow" />
        </div>

        <header className="home-masthead">
          <div className="home-masthead-inner">
            <div className="home-masthead-brand">
              <span className="home-masthead-logo-wrap">
                <img src={govLogo} alt="" className="home-masthead-gov-logo" width="112" height="36" />
              </span>
              <span className="home-masthead-divider" aria-hidden="true" />
              <span className="home-masthead-title">Νταντάδες της Γειτονιάς</span>
            </div>
            <nav className="home-masthead-nav" aria-label="Βασική πλοήγηση">
              <Link to="/how-it-works" className="home-nav-link">Πώς λειτουργεί</Link>
              <Link to="/faq" className="home-nav-link">Συχνές ερωτήσεις</Link>
              <Link to="/about-us" className="home-nav-link">Σχετικά</Link>
            </nav>
          </div>
          <div className="gov-header-accent home-masthead-accent" aria-hidden="true" />
        </header>

        <section className="home-hero" aria-labelledby="home-hero-heading">
          <div className="home-hero-inner">
            <div className="home-hero-badge">
              <IconSpark />
              <span>Ψηφιακή πλατφόρμα συνεργασίας</span>
            </div>
            <img src={logo} alt="Νταντάδες της Γειτονιάς" className="home-hero-logo" />
            <h1 id="home-hero-heading" className="home-hero-heading">
              Ασφαλής φροντίδα για το παιδί σας,{' '}
              <span className="home-hero-heading-accent">με επαγγελματίες που εμπιστεύεστε</span>
            </h1>
            <p className="home-hero-lead">
              Συνδέουμε γονείς και πιστοποιημένες νταντάδες με διαφανείς διαδικασίες, σαφή προφίλ και απλή διαχείριση
              συνεργασίας — όλα σε ένα μέρος.
            </p>
            <div className="home-hero-cta">
              <Link to="/register" className="home-btn home-btn--primary">
                Δημιουργία λογαριασμού
              </Link>
              <Link to="/login" className="home-btn home-btn--ghost">
                Σύνδεση
              </Link>
            </div>
            <p className="home-hero-note">
              <Link to="/eligibility" className="home-hero-note-link">
                Δείτε τα κριτήρια επιλεξιμότητας
              </Link>
            </p>
            <ul className="home-trust" aria-label="Σημεία εμπιστοσύνης">
              <li className="home-trust-item">
                <IconShield />
                <span>Έμφαση στην ασφάλεια και τη διαφάνεια</span>
              </li>
              <li className="home-trust-item">
                <IconUsers />
                <span>Προφίλ για γονείς και επαγγελματίες</span>
              </li>
              <li className="home-trust-item">
                <IconCalendar />
                <span>Κρατήσεις και ροή συνεργασίας σε ένα μέρος</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="home-overlap">
        <section className="home-pillars" aria-labelledby="home-pillars-heading">
          <h2 id="home-pillars-heading" className="home-section-title">
            Γιατί να μας επιλέξετε
          </h2>
          <p className="home-section-sub">
            Σχεδιασμένο για σύγχρονες οικογένειες και επαγγελματίες φροντίδας — καθαρή εμπειρία, χωρίς περιττό θόρυβο.
          </p>
          <div className="home-pillars-grid">
            <article className="home-pillar">
              <div className="home-pillar-icon" aria-hidden="true">
                <IconShield />
              </div>
              <h3 className="home-pillar-title">Αξιόπιστο πλαίσιο</h3>
              <p className="home-pillar-text">
                Δομημένη ροή από την πρώτη επαφή μέχρι την ολοκλήρωση της συνεργασίας, με σαφή βήματα και έλεγχο πληροφοριών.
              </p>
            </article>
            <article className="home-pillar">
              <div className="home-pillar-icon" aria-hidden="true">
                <IconUsers />
              </div>
              <h3 className="home-pillar-title">Σωστή «ταιριάζει»</h3>
              <p className="home-pillar-text">
                Αναζήτηση και προφίλ που βοηθούν να βρείτε άτομο που ταιριάζει στις ανάγκες σας και στο πρόγραμμά σας.
              </p>
            </article>
            <article className="home-pillar">
              <div className="home-pillar-icon" aria-hidden="true">
                <IconCalendar />
              </div>
              <h3 className="home-pillar-title">Λιγότερη γραφειοκρατία</h3>
              <p className="home-pillar-text">
                Μηνύματα, ραντεβού και παρακολούθηση συνεργασίας χωρίς να χάνετε νήμα από τις υποχρεώσεις σας.
              </p>
            </article>
          </div>
        </section>

        <section className="home-audiences" aria-labelledby="home-audiences-heading">
          <h2 id="home-audiences-heading" className="home-section-title home-section-title--dark">
            Για ποιους είναι η υπηρεσία
          </h2>
          <div className="home-audiences-grid">
            <article className="home-audience-card home-audience-card--parents">
              <h3 className="home-audience-title">Γονείς και κηδεμόνες</h3>
              <ul className="home-audience-list">
                <li>Αναζήτηση επαγγελματιών με φίλτρα που σας ενδιαφέρουν</li>
                <li>Ξεκάθαρη εικόνα προφίλ και συνεργασίας</li>
                <li>Απλούστευση κράτησης και πληρωμής μέσω της πλατφόρμας</li>
              </ul>
            </article>
            <article className="home-audience-card home-audience-card--pros">
              <h3 className="home-audience-title">Επαγγελματίες φροντίδας</h3>
              <ul className="home-audience-list">
                <li>Προβολή προφίλ σε γονείς που αναζητούν βοήθεια</li>
                <li>Διαχείριση συνεργασιών και επικοινωνίας</li>
                <li>Οργανωμένη ροή για ραντεβού και αμοιβή</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="home-bottom-cta" aria-labelledby="home-bottom-cta-heading">
          <div className="home-bottom-cta-inner">
            <h2 id="home-bottom-cta-heading" className="home-bottom-cta-title">
              Έτοιμοι να ξεκινήσετε;
            </h2>
            <p className="home-bottom-cta-text">
              Δημιουργήστε λογαριασμό σε λίγα λεπτά ή συνδεθείτε αν έχετε ήδη πρόσβαση στην υπηρεσία.
            </p>
            <div className="home-bottom-cta-actions">
              <Link to="/register" className="home-btn home-btn--primary home-btn--lg">
                Εγγραφή
              </Link>
              <Link to="/login" className="home-btn home-btn--outline home-btn--lg">
                Είσοδος
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
