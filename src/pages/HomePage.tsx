import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Ear, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Volume2,
  Clock,
  HelpCircle
} from 'lucide-react';
import { PageId } from '../types';
import { 
  BUSINESS_INFO, 
  SERVICES, 
  CONSULTATION_STEPS, 
  REASONS_TO_SEEK_SUPPORT, 
  FAQS, 
  HELPFUL_INSIGHTS 
} from '../data/business';
import { AcousticWave } from '../components/AcousticWave';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('early-signs');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear':
        return <Ear className="w-6 h-6 text-[#0F4C5C]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#0F4C5C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0F4C5C]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0F4C5C]" />;
      default:
        return <Volume2 className="w-6 h-6 text-[#0F4C5C]" />;
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* 1. HERO SECTION: Distinctive, calm, editorial healthcare aesthetic */}
      <section id="hero" className="relative pt-8 md:pt-16 lg:pt-20 overflow-hidden">
        {/* Subtle decorative acoustic wave backdrop */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-35 pointer-events-none -z-10">
          <AcousticWave variant="rings" className="w-full h-full text-[#B8A89A]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E4EFF2] border border-[#0F4C5C]/20 text-[#0F4C5C] text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#0F4C5C]" />
                <span>Professional Hearing Practice in Arconciel, Switzerland</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0B3842] leading-[1.12] tracking-tight font-normal">
                  Rediscover the quiet joy of <span className="italic font-light text-[#0F4C5C]">clear listening</span> and conversation.
                </h1>
                <p className="text-lg sm:text-xl text-[#576563] leading-relaxed max-w-2xl font-light">
                  {BUSINESS_INFO.name} offers attentive, personalized hearing consultations in a calm setting. We take the time to listen, assess your acoustic needs, and accompany you toward lasting auditory comfort.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  id="hero-primary-phone"
                  href={BUSINESS_INFO.phone.tel}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#0F4C5C] text-white font-medium hover:bg-[#0B3842] shadow-sm transition-all duration-200 text-base"
                >
                  <Phone className="w-5 h-5 text-[#D8CEBE]" aria-hidden="true" />
                  <span>Call {BUSINESS_INFO.phone.display}</span>
                </a>

                <button
                  id="hero-secondary-consult"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF7F2] text-[#0B3842] font-medium border border-[#D8CEBE] hover:bg-[#E7DFD5]/60 transition-all duration-200 text-base"
                >
                  <Calendar className="w-4 h-4 text-[#0F4C5C]" />
                  <span>Request a Consultation</span>
                </button>
              </div>

              {/* Consultation highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E7DFD5]">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#0B3842] uppercase tracking-wider">Independent Advice</p>
                  <p className="text-xs text-[#576563]">Objective guidance focused solely on your listening goals.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#0B3842] uppercase tracking-wider">Unhurried Pace</p>
                  <p className="text-xs text-[#576563]">Dedicated time for detailed dialogue without rushed schedules.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#0B3842] uppercase tracking-wider">Peaceful Setting</p>
                  <p className="text-xs text-[#576563]">Located at Pré-de-l'Arche 4 with comfortable access.</p>
                </div>
              </div>

            </div>

            {/* Right Editorial Card / Imagery (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white border border-[#E7DFD5] p-7 sm:p-9 shadow-xs overflow-hidden">
                {/* Visual accent top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0F4C5C] via-[#176375] to-[#B8A89A]" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#E7DFD5] pb-5">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#576563]">Practice Focus</span>
                      <h2 className="font-serif text-2xl text-[#0B3842] font-medium mt-0.5">Hearing Consultations</h2>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D8CEBE] flex items-center justify-center text-[#0F4C5C]">
                      <Ear className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-sm text-[#576563] leading-relaxed">
                    Hearing connects us to the people and subtle moments we cherish. When speech becomes difficult to distinguish or sound clarity softens, professional consultation provides calm clarity.
                  </p>

                  <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-xl border border-[#E7DFD5]/70 text-xs text-[#1B2926]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                      <span>Comfortable, one-on-one consultation in Arconciel</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                      <span>Thorough evaluation of conversational listening</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                      <span>Attentive post-consultation adaptation and care</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[#576563]">
                      <Clock className="w-3.5 h-3.5 text-[#0F4C5C]" />
                      <span>{BUSINESS_INFO.consultationModel}</span>
                    </div>
                    <a
                      href={BUSINESS_INFO.phone.tel}
                      className="font-semibold text-[#0F4C5C] hover:underline"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRACTICE INTRODUCTION: The human dimension of hearing care */}
      <section id="practice-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F3EFEA] border border-[#D8CEBE]/80 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
                Introduction to the Practice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] leading-tight font-normal">
                A calm, respectful approach to personal hearing wellness.
              </h2>
              <p className="text-sm text-[#576563] leading-relaxed">
                Founded in Arconciel, <strong>{BUSINESS_INFO.name}</strong> was established with a singular commitment: providing attentive hearing care tailored to the individual pace, comfort, and real-life listening demands of every person.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E7DFD5] space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif text-lg font-medium">
                  01
                </div>
                <h3 className="font-serif text-lg text-[#0B3842] font-medium">Attentive Listening</h3>
                <p className="text-xs text-[#576563] leading-relaxed">
                  Before analyzing any numbers or acoustics, we listen attentively to your story, your daily routines, and what matters most in your conversations.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E7DFD5] space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif text-lg font-medium">
                  02
                </div>
                <h3 className="font-serif text-lg text-[#0B3842] font-medium">Neutral Guidance</h3>
                <p className="text-xs text-[#576563] leading-relaxed">
                  We maintain independence and clarity, offering thoughtful recommendations without commercial pressure or unsupported clinical claims.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E7DFD5] space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif text-lg font-medium">
                  03
                </div>
                <h3 className="font-serif text-lg text-[#0B3842] font-medium">Quiet Consultation Setting</h3>
                <p className="text-xs text-[#576563] leading-relaxed">
                  Situated in peaceful Arconciel away from crowded commercial centers, our consultation environment allows serene, focused evaluation.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E7DFD5] space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif text-lg font-medium">
                  04
                </div>
                <h3 className="font-serif text-lg text-[#0B3842] font-medium">Long-Term Care</h3>
                <p className="text-xs text-[#576563] leading-relaxed">
                  Hearing care is a continuous relationship. We provide follow-up check-ups, hygienic care, and fine tuning whenever your lifestyle evolves.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. HEARING-RELATED SERVICES: Distinctive card layout with clear typography */}
      <section id="services-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
              Comprehensive Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal tracking-tight">
              Hearing-related services tailored to your everyday life.
            </h2>
            <p className="text-[#576563] text-base leading-relaxed">
              From in-depth consultations to ongoing acoustic adjustments and preventive hearing protection, every service is delivered with patience and precision.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C5C] hover:text-[#0B3842] group transition-colors self-start md:self-auto"
          >
            <span>Explore all services in detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl border border-[#E7DFD5] p-8 hover:border-[#0F4C5C]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] flex items-center justify-center transition-colors group-hover:bg-[#E4EFF2]">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#576563]/80 uppercase tracking-widest">
                    Arconciel Practice
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#0B3842] font-medium group-hover:text-[#0F4C5C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#0F4C5C] mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#576563] leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2 text-xs text-[#1B2926]">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C5C] mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7DFD5] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-[#0B3842] hover:text-[#0F4C5C] flex items-center gap-1.5"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={BUSINESS_INFO.phone.tel}
                  className="text-xs text-[#576563] hover:text-[#0F4C5C]"
                >
                  Call {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW THE CONSULTATION EXPERIENCE WORKS: Editorial pathway */}
      <section id="consultation-pathway" className="bg-[#0B3842] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D8CEBE]">
              The Consultation Pathway
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
              How your visit unfolds in our practice.
            </h2>
            <p className="text-[#E4EFF2]/80 text-base leading-relaxed">
              We believe a successful hearing journey relies on transparency, patience, and mutual trust. Here is what to expect from your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONSULTATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#072329]/60 border border-[#176375]/60 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="block font-serif text-4xl font-light text-[#B8A89A]">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#E4EFF2]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#176375]/40 text-xs text-[#D8CEBE]">
                  <span className="block text-[10px] uppercase tracking-wider text-[#E4EFF2]/50">Primary Focus</span>
                  <span className="font-medium">{step.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Reassuring note */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#072329] border border-[#176375] text-xs text-[#E4EFF2]">
              <span>Appointments are conducted one-on-one with full confidentiality.</span>
              <span className="text-[#B8A89A]">•</span>
              <a href={BUSINESS_INFO.phone.tel} className="text-[#D8CEBE] font-semibold hover:underline">
                Call {BUSINESS_INFO.phone.display} for scheduling
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. HELPFUL HEARING-RELATED INFORMATION: Educational & Reassuring */}
      <section id="hearing-information" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
              Understanding Audition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal tracking-tight">
              Helpful insights on sound perception and everyday well-being.
            </h2>
            <p className="text-[#576563] text-base leading-relaxed">
              Hearing is more than decibels—it is how we interpret the emotional warmth of laughter, the cadence of voices, and our sense of place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HELPFUL_INSIGHTS.map((item, index) => (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-2xl border border-[#D8CEBE] p-7 space-y-4"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#0F4C5C] border border-[#E7DFD5]">
                  {item.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#0B3842] font-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-[#576563] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. REASONS TO SEEK PROFESSIONAL SUPPORT: Human & Conversational */}
      <section id="reasons-to-seek-support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#E7DFD5] p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
              Why Consultation Matters
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal">
              Reasons to seek professional hearing support.
            </h2>
            <p className="text-[#576563] text-base leading-relaxed">
              Addressing changes in hearing is an empowering step toward regaining everyday comfort and staying fully engaged with those around you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {REASONS_TO_SEEK_SUPPORT.map((reason, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif text-sm font-semibold">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-lg text-[#0B3842] font-medium">
                  {reason.title}
                </h3>
                <p className="text-xs text-[#576563] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#E7DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#576563]">
              Have questions about your hearing or wish to arrange an evaluation?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] hover:text-[#0B3842]"
            >
              <span>Schedule your consultation in Arconciel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Homepage curated preview) */}
      <section id="faq-preview" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-[#576563] text-sm max-w-xl mx-auto">
            Clear, straightforward answers about hearing consultations, preparing for your visit, and adapting to acoustic solutions.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-[#0B3842] font-medium">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#0F4C5C] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#576563] leading-relaxed border-t border-[#FAF8F5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#D8CEBE] text-sm font-medium text-[#0B3842] hover:bg-[#E7DFD5]/60 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#0F4C5C]" />
            <span>View all questions and preparation advice</span>
          </button>
        </div>
      </section>

      {/* 8. STRONG FINAL CONTACT CTA BANNER */}
      <section id="final-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F4C5C] to-[#072329] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-lg">
          
          <div className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none">
            <AcousticWave variant="rings" className="w-full h-full text-[#D8CEBE]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D8CEBE] tracking-wider uppercase">
                Dedicated Hearing Consultations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                Ready to take the first step toward clear, comfortable listening?
              </h2>
              <p className="text-sm sm:text-base text-[#E4EFF2]/85 max-w-2xl leading-relaxed">
                We welcome you in Arconciel for a thoughtful, personalized evaluation. Call directly or send a message to arrange your appointment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                id="cta-bottom-phone"
                href={BUSINESS_INFO.phone.tel}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-[#0B3842] font-semibold hover:bg-[#FAF7F2] shadow-sm transition-all duration-200 text-center"
              >
                <Phone className="w-4 h-4 text-[#0F4C5C]" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>

              <button
                id="cta-bottom-inquire"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#072329] text-white font-medium border border-[#176375] hover:bg-[#0B3842] transition-all duration-200 text-center"
              >
                <Calendar className="w-4 h-4 text-[#D8CEBE]" />
                <span>Request Appointment</span>
              </button>
            </div>
          </div>

          {/* Business location reminder */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#E4EFF2]/75">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B8A89A]" />
              <span>{BUSINESS_INFO.address.full}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B8A89A]" />
              <span>{BUSINESS_INFO.consultationModel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#B8A89A]" />
              <a href={BUSINESS_INFO.phone.tel} className="underline hover:text-white">
                Direct phone: {BUSINESS_INFO.phone.display}
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
