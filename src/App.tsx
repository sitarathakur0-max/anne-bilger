import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Initialize current page based on window hash or default to 'home'
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'services', 'about', 'faq', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  // Sync state with hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'about', 'faq', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set document title dynamically according to the current view
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Anne Bilger Audition Sàrl – Hearing Services in Arconciel, Switzerland',
      services: 'Hearing Care Services – Anne Bilger Audition Sàrl',
      about: 'About Our Practice – Anne Bilger Audition Sàrl',
      faq: 'Frequently Asked Questions – Anne Bilger Audition Sàrl',
      contact: 'Contact & Consultations – Anne Bilger Audition Sàrl',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1B2926] font-sans antialiased selection:bg-[#0F4C5C]/15 selection:text-[#0F4C5C]">
      {/* Skip to Content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#0F4C5C] text-white px-4 py-2 rounded-md font-medium text-sm shadow-md"
      >
        Skip to main content
      </a>

      {/* Persistent Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow focus:outline-none">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
