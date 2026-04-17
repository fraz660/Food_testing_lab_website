import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Team from './pages/Team';
import Internship from './pages/Internship';
import Contact from './pages/Contact';

import Blog from './pages/Blog';
import StaticPage from './pages/StaticPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Research from './pages/Research';
import SitemapPage from './pages/SitemapPage';
import TestMenu from './pages/TestMenu';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App min-h-screen bg-gray-50">
      <ScrollToTop />
      <SEO />
      {!isAdminRoute && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/team" element={<Team />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          
          {/* Static Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/test-menu" element={<TestMenu />} />
          <Route path="/research" element={<Research />} />
          <Route path="/page/:slug" element={<StaticPage />} />
          
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
