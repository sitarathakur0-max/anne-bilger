import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, Calendar, Ear } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/business';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7DFD5]'
          : 'bg-[#FAF8F5] border-b border-[#E7DFD5]/60'
      }`}
    >
      {/* Top micro-bar: Location & Phone */}
      <div className="hidden md:block bg-[#0B3842] text-[#E4EFF2] text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#E4EFF2]/90">
              <MapPin className="w-3.5 h-3.5 text-[#B8A89A]" aria-hidden="true" />
              <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</span>
            </span>
            <span className="text-[#E4EFF2]/40">•</span>
            <span className="text-[#E4EFF2]/80">
              {BUSINESS_INFO.consultationModel}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#E4EFF2]/70">Direct Inquiries:</span>
            <a
              id="top-bar-phone"
              href={BUSINESS_INFO.phone.tel}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#D8CEBE] transition-colors"
              title="Call Anne Bilger Audition directly"
            >
              <Phone className="w-3 h-3 text-[#B8A89A]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Business Brand Identity */}
          <button
            id="brand-home-button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] rounded-lg p-1"
            aria-label="Anne Bilger Audition Sàrl - Return to Homepage"
          >
            <div className="w-11 h-11 rounded-full bg-[#0F4C5C] text-[#FAF8F5] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Ear className="w-5 h-5 text-[#E7DFD5]" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#0B3842] group-hover:text-[#0F4C5C] transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-xs font-sans tracking-wide uppercase text-[#576563]">
                {BUSINESS_INFO.category} · {BUSINESS_INFO.address.city}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-[#0F4C5C] bg-[#E4EFF2]/80 font-semibold'
                      : 'text-[#1B2926] hover:text-[#0F4C5C] hover:bg-[#F3EFEA]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-phone-link"
              href={BUSINESS_INFO.phone.tel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#0F4C5C] bg-[#E4EFF2]/70 hover:bg-[#E4EFF2] rounded-full border border-[#0F4C5C]/20 transition-all duration-200"
              aria-label={`Call ${BUSINESS_INFO.phone.display}`}
            >
              <Phone className="w-4 h-4 text-[#0F4C5C]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>

            <button
              id="header-cta-contact"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0F4C5C] hover:bg-[#0B3842] rounded-full shadow-xs transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#E7DFD5]" aria-hidden="true" />
              <span>Inquire / Consult</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-quick-call"
              href={BUSINESS_INFO.phone.tel}
              className="p-2.5 rounded-full bg-[#E4EFF2] text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white transition-colors"
              aria-label="Call business phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#1B2926] hover:text-[#0F4C5C] hover:bg-[#F3EFEA] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[#E7DFD5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0F4C5C] text-white'
                      : 'text-[#1B2926] hover:bg-[#F3EFEA] hover:text-[#0F4C5C]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E7DFD5] space-y-3">
            <a
              id="mobile-menu-phone"
              href={BUSINESS_INFO.phone.tel}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#E4EFF2] text-[#0F4C5C] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phone.display}</span>
            </a>

            <div className="text-xs text-[#576563] text-center pt-2">
              <p className="font-medium text-[#1B2926]">{BUSINESS_INFO.address.street}</p>
              <p>{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, Switzerland</p>
              <p className="mt-1 text-[#0F4C5C] font-medium">{BUSINESS_INFO.consultationModel}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
