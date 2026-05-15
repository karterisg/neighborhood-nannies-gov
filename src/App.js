import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import PageShellFallback from './components/PageShellFallback';
import GovFooter from './components/GovFooter';
import './App.css';
import './gov-pages.css';
import './premium-shell.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const SearchNanniesPage = lazy(() => import('./pages/SearchNanniesPage'));
const NannyProfilePage = lazy(() => import('./pages/NannyProfilePage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const ContractPage = lazy(() => import('./pages/ContractPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const ReviewPage = lazy(() => import('./pages/ReviewPage'));
const NannyDashboardPage = lazy(() => import('./pages/NannyDashboardPage'));
const EditNannyProfilePage = lazy(() => import('./pages/EditNannyProfilePage'));
const CreateAdPage = lazy(() => import('./pages/CreateAdPage'));
const AppointmentManagementPage = lazy(() => import('./pages/AppointmentManagementPage'));
const CompletedVouchersPage = lazy(() => import('./pages/CompletedVouchersPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const EditProfilePage = lazy(() => import('./pages/EditProfilePage'));
const EligibilityPage = lazy(() => import('./pages/EligibilityPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const FullNannyProfilePage = lazy(() => import('./pages/FullNannyProfilePage'));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const ParentDashboardPage = lazy(() => import('./pages/ParentDashboardPage'));
const NannyManageAdsPage = lazy(() => import('./pages/NannyManageAdsPage'));
const AdvancedSearchPage = lazy(() => import('./pages/AdvancedSearchPage'));
const ContractDetailsPage = lazy(() => import('./pages/ContractDetailsPage'));
const SchedulePage = lazy(() => import('./pages/SchedulePage'));
const InboxPage = lazy(() => import('./pages/InboxPage'));
const OutboxPage = lazy(() => import('./pages/OutboxPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const UploadLegalDocPage = lazy(() => import('./pages/UploadLegalDocPage'));
const OnboardingParentPage = lazy(() => import('./pages/OnboardingParentPage'));
const OnboardingNannyPage = lazy(() => import('./pages/OnboardingNannyPage'));
const VouchersPage = lazy(() => import('./pages/VouchersPage'));
const PaymentHistoryPage = lazy(() => import('./pages/PaymentHistoryPage'));
const ReviewDetailsPage = lazy(() => import('./pages/ReviewDetailsPage'));
const PasswordResetPage = lazy(() => import('./pages/PasswordResetPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const HelpPage = lazy(() => import('./pages/HelpPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const NannyVoucherConfirmationPage = lazy(() => import('./pages/NannyVoucherConfirmationPage'));
const NannyHistoryPage = lazy(() => import('./pages/NannyHistoryPage'));
const SearchParentsPage = lazy(() => import('./pages/SearchParentsPage'));
const ParentProfilePage = lazy(() => import('./pages/ParentProfilePage'));

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <>
            <Suspense fallback={<PageShellFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/search-nannies" element={<PrivateRoute><SearchNanniesPage /></PrivateRoute>} />
                <Route path="/nanny/:id" element={<PrivateRoute><NannyProfilePage /></PrivateRoute>} />
                <Route path="/nanny/:id/full-profile" element={<PrivateRoute><FullNannyProfilePage /></PrivateRoute>} />
                <Route path="/booking/:nannyId" element={<PrivateRoute><BookingPage /></PrivateRoute>} />
                <Route path="/contract/:nannyId" element={<PrivateRoute><ContractPage /></PrivateRoute>} />
                <Route path="/payment/:nannyId" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
                <Route path="/review/:nannyId" element={<PrivateRoute><ReviewPage /></PrivateRoute>} />
                <Route path="/nanny-dashboard" element={<PrivateRoute><NannyDashboardPage /></PrivateRoute>} />
                <Route path="/edit-nanny-profile" element={<PrivateRoute><EditNannyProfilePage /></PrivateRoute>} />
                <Route path="/create-ad" element={<PrivateRoute><CreateAdPage /></PrivateRoute>} />
                <Route path="/manage-appointments" element={<PrivateRoute><AppointmentManagementPage /></PrivateRoute>} />
                <Route path="/completed-vouchers" element={<PrivateRoute><CompletedVouchersPage /></PrivateRoute>} />
                <Route path="/history" element={<PrivateRoute><HistoryPage /></PrivateRoute>} />
                <Route path="/edit-profile" element={<PrivateRoute><EditProfilePage /></PrivateRoute>} />
                <Route path="/eligibility" element={<EligibilityPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/notifications" element={<PrivateRoute><NotificationsPage /></PrivateRoute>} />
                <Route path="/admin-dashboard" element={<PrivateRoute><AdminDashboardPage /></PrivateRoute>} />
                <Route path="/parent-dashboard" element={<PrivateRoute><ParentDashboardPage /></PrivateRoute>} />
                <Route path="/nanny/manage-ads" element={<PrivateRoute><NannyManageAdsPage /></PrivateRoute>} />
                <Route path="/search/advanced" element={<PrivateRoute><AdvancedSearchPage /></PrivateRoute>} />
                <Route path="/contracts/:id/details" element={<PrivateRoute><ContractDetailsPage /></PrivateRoute>} />
                <Route path="/schedule" element={<PrivateRoute><SchedulePage /></PrivateRoute>} />
                <Route path="/messages/inbox" element={<PrivateRoute><InboxPage /></PrivateRoute>} />
                <Route path="/messages/outbox" element={<PrivateRoute><OutboxPage /></PrivateRoute>} />
                <Route path="/chat/:id" element={<PrivateRoute><ChatPage /></PrivateRoute>} />
                <Route path="/upload-legal-doc" element={<PrivateRoute><UploadLegalDocPage /></PrivateRoute>} />
                <Route path="/onboarding-parent" element={<OnboardingParentPage />} />
                <Route path="/onboarding-nanny" element={<OnboardingNannyPage />} />
                <Route path="/vouchers" element={<PrivateRoute><VouchersPage /></PrivateRoute>} />
                <Route path="/payment-history" element={<PrivateRoute><PaymentHistoryPage /></PrivateRoute>} />
                <Route path="/review/:id/details" element={<PrivateRoute><ReviewDetailsPage /></PrivateRoute>} />
                <Route path="/reset-password" element={<PasswordResetPage />} />
                <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/nanny-vouchers" element={<PrivateRoute><NannyVoucherConfirmationPage /></PrivateRoute>} />
                <Route path="/nanny-history" element={<PrivateRoute><NannyHistoryPage /></PrivateRoute>} />
                <Route path="/search-parents" element={<PrivateRoute><SearchParentsPage /></PrivateRoute>} />
                <Route path="/parent/:id" element={<PrivateRoute><ParentProfilePage /></PrivateRoute>} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
            <GovFooter />
          </>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

function PrivateRoute({ children }) {
  const { currentUser } = React.useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" />;
}

export default App;
