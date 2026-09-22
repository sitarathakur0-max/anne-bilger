import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Phone, 
  Calendar, 
  HelpCircle,
  Ear,
  Sparkles,
  Sliders,
  Clock
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQS } from '../data/business';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'early-signs': true,
    'consultation-prep': true,
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'consultation', label: 'Consultations & Preparation' },
    { id: 'hearing', label: 'Understanding Hearing' },
    { id: 'daily', label: 'Daily Adaptation & Care' },
    { id: 'general', label: 'Practice Details' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-12 bg-[#F3EFEA] border-b border-[#D8CEBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#0F4C5C] border border-[#E7DFD5]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Helpful Knowledge</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0B3842] font-normal leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#576563] leading-relaxed">
              Find transparent answers about hearing consultations, preparing for your visit to Arconciel, and adapting comfortably to sound solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Controls & Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Search and Category Filter Bar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#576563] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. consultation, adaptation, preparation)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#D8CEBE] text-sm text-[#1B2926] placeholder-[#576563]/60 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#576563] hover:text-[#1B2926]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0F4C5C] text-white shadow-xs'
                    : 'bg-white text-[#576563] border border-[#E7DFD5] hover:bg-[#FAF7F2] hover:text-[#0B3842]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#E7DFD5] space-y-3">
              <p className="font-serif text-xl text-[#0B3842]">No questions found</p>
              <p className="text-xs text-[#576563]">
                Try adjusting your search terms or clearing the category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-semibold text-[#0F4C5C] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#0B3842] font-medium leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#0F4C5C] flex items-center justify-center shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#576563] leading-relaxed border-t border-[#FAF8F5]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Direct Help Callout */}
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8CEBE] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl text-[#0B3842] font-medium">
              Have a specific question not addressed here?
            </h3>
            <p className="text-xs sm:text-sm text-[#576563]">
              We are pleased to speak with you directly and provide personalized clarification regarding your hearing situation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.phone.tel}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F4C5C] text-white text-xs font-medium hover:bg-[#0B3842] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D8CEBE]" />
              <span>Call {BUSINESS_INFO.phone.display}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0B3842] border border-[#D8CEBE] text-xs font-medium hover:bg-[#E7DFD5]/60 transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#0F4C5C]" />
              <span>Send an Inquiry</span>
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
