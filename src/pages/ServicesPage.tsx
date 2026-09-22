import React from 'react';
import { 
  Ear, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  Info,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/business';
import { AcousticWave } from '../components/AcousticWave';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear':
        return <Ear className="w-7 h-7 text-[#0F4C5C]" />;
      case 'Sliders':
        return <Sliders className="w-7 h-7 text-[#0F4C5C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#0F4C5C]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#0F4C5C]" />;
      default:
        return <Ear className="w-7 h-7 text-[#0F4C5C]" />;
    }
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      
      {/* Page Header */}
      <section className="relative pt-12 md:pt-16 pb-12 bg-[#F3EFEA] border-b border-[#D8CEBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#0F4C5C] border border-[#E7DFD5]">
              <span>Hearing Care Services</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0B3842] font-normal leading-tight">
              Personalized, attentive hearing services in Arconciel.
            </h1>
            <p className="text-base sm:text-lg text-[#576563] leading-relaxed">
              We provide thoughtful consultation, precision acoustic fitting, ongoing maintenance, and preventive sound protection—delivered with patience in a quiet environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Deep-Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={`service-detail-${service.id}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl border border-[#E7DFD5] ${
                isEven ? 'bg-white' : 'bg-[#FAF7F2]'
              }`}
            >
              <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E4EFF2] flex items-center justify-center border border-[#0F4C5C]/20">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#576563]">
                      Service Module 0{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#0B3842] font-medium">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base font-medium text-[#0F4C5C] leading-snug">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#576563] leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1B2926]">
                    Key Consultation Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E7DFD5] text-xs text-[#1B2926]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F4C5C] text-white text-xs font-medium hover:bg-[#0B3842] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D8CEBE]" />
                    <span>Inquire About This Service</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.phone.tel}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call: {BUSINESS_INFO.phone.display}</span>
                  </a>
                </div>
              </div>

              {/* Graphic / Information Card (5 cols) */}
              <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="rounded-2xl bg-[#0B3842] text-[#E4EFF2] p-8 space-y-6 relative overflow-hidden">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#B8A89A] font-mono">
                      Acoustic Perspective
                    </span>
                    <h3 className="font-serif text-xl text-white font-normal">
                      Why dedicated care makes a difference
                    </h3>
                  </div>

                  <p className="text-xs text-[#E4EFF2]/80 leading-relaxed">
                    Auditory comfort is deeply personal. Rather than applying standard formulas, we take your specific living environments, vocal frequencies, and personal comfort into consideration at every step.
                  </p>

                  <div className="pt-4 border-t border-[#176375] space-y-2 text-xs text-[#D8CEBE]">
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#B8A89A]" />
                      <span>Dedicated, unhurried time per appointment</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#B8A89A]" />
                      <span>Family members and companions welcome</span>
                    </p>
                  </div>

                  <div className="pt-2 opacity-30">
                    <AcousticWave variant="wave" className="w-full h-8 text-[#D8CEBE]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* What to Expect During an Appointment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8CEBE] p-8 sm:p-12">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
              Appointment Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal">
              What to expect when visiting our practice.
            </h2>
            <p className="text-sm text-[#576563] leading-relaxed">
              We know that consulting for hearing changes can feel unfamiliar. Here is our solemn commitment to how we work with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E7DFD5] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif font-medium">
                1
              </div>
              <h3 className="font-serif text-lg text-[#0B3842] font-medium">Zero Sales Pressure</h3>
              <p className="text-xs text-[#576563] leading-relaxed">
                Our objective is your long-term acoustic well-being. We provide honest, neutral explanations without pushing unsolicited devices or hasty decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E7DFD5] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif font-medium">
                2
              </div>
              <h3 className="font-serif text-lg text-[#0B3842] font-medium">Transparent Dialogue</h3>
              <p className="text-xs text-[#576563] leading-relaxed">
                We clearly explain every acoustic evaluation, what sound frequencies mean in everyday conversation, and what realistic steps can improve clarity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E7DFD5] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center font-serif font-medium">
                3
              </div>
              <h3 className="font-serif text-lg text-[#0B3842] font-medium">Continuous Follow-Up</h3>
              <p className="text-xs text-[#576563] leading-relaxed">
                Your relationship with your hearing changes over time. We remain available in Arconciel for fine adjustments, filter maintenance, and friendly advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Acoustic Advice Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-white border border-[#E7DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Questions About Your Hearing?</span>
            </div>
            <p className="text-sm text-[#576563]">
              Whether you are noticing early signs of hearing loss or require maintenance on current solutions, we are happy to assist by telephone or appointment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.phone.tel}
              className="px-5 py-3 rounded-xl bg-[#0F4C5C] text-white text-xs font-medium hover:bg-[#0B3842] text-center"
            >
              Call {BUSINESS_INFO.phone.display}
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl bg-[#FAF7F2] text-[#0B3842] border border-[#D8CEBE] text-xs font-medium hover:bg-[#E7DFD5]/60 text-center"
            >
              Contact Office
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
