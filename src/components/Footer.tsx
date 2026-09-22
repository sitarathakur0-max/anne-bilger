import React from 'react';
import { Ear, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, NAV_ITEMS, SERVICES } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-[#0B3842] text-[#E4EFF2] pt-16 pb-12 border-t border-[#176375]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#176375]/50">
          
          {/* Col 1: Business Identity & Human-centered philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#176375] text-white flex items-center justify-center">
                <Ear className="w-5 h-5 text-[#D8CEBE]" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-medium tracking-tight text-white">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block text-xs uppercase tracking-wider text-[#B8A89A]">
                  {BUSINESS_INFO.category} · Arconciel
                </span>
              </div>
            </div>

            <p className="text-[#E4EFF2]/85 text-sm leading-relaxed max-w-md">
              Providing personalized, attentive hearing consultations and auditory care in Arconciel, Switzerland. Dedicated to restoring sound clarity, conversational ease, and lasting comfort through an unhurried, patient-centered approach.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#B8A89A]">
              <span className="inline-flex items-center gap-1.5 bg-[#072329] px-3 py-1.5 rounded-full border border-[#176375]/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8A89A]" />
                Independent Hearing Care
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#072329] px-3 py-1.5 rounded-full border border-[#176375]/50">
                <HeartHandshake className="w-3.5 h-3.5 text-[#B8A89A]" />
                Unhurried Appointments
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              Navigation & Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#E4EFF2]/80 hover:text-white hover:underline transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-[#B8A89A] font-semibold mb-2">
                Services Offered
              </h4>
              <ul className="space-y-1.5 text-xs text-[#E4EFF2]/70">
                {SERVICES.map((s) => (
                  <li key={s.id} className="truncate">• {s.title}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Complete Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              Practice Location & Inquiries
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8A89A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">{BUSINESS_INFO.name}</p>
                  <p className="text-[#E4EFF2]/85">{BUSINESS_INFO.address.street}</p>
                  <p className="text-[#E4EFF2]/85">{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, Switzerland</p>
                  <p className="text-xs text-[#B8A89A] mt-0.5">Canton of Fribourg</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B8A89A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#B8A89A] uppercase tracking-wider">Direct Telephone</p>
                  <a
                    id="footer-phone-link"
                    href={BUSINESS_INFO.phone.tel}
                    className="font-medium text-white hover:text-[#D8CEBE] transition-colors underline-offset-2 hover:underline text-base inline-block mt-0.5"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                  <p className="text-xs text-[#E4EFF2]/70 mt-0.5">Clickable for direct calling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B8A89A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Consultation Hours</p>
                  <p className="text-[#E4EFF2]/85">{BUSINESS_INFO.consultationModel}</p>
                  <p className="text-xs text-[#B8A89A] mt-1">Monday through Friday by prior arrangement</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E4EFF2]/65">
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="mt-1 text-[#E4EFF2]/50">
              Professional hearing services practice in Arconciel (Fribourg), Switzerland.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[#E4EFF2]/75">
            <span>English-only professional website</span>
            <span className="text-[#176375]">•</span>
            <span>Ground-floor access</span>
            <span className="text-[#176375]">•</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#D8CEBE] hover:underline"
            >
              Contact Office
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
