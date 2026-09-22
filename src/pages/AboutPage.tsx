import React from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  ShieldCheck, 
  Ear, 
  Phone, 
  Calendar, 
  Clock, 
  Check, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { AcousticWave } from '../components/AcousticWave';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      
      {/* Page Header */}
      <section className="relative pt-12 md:pt-16 pb-12 bg-[#F3EFEA] border-b border-[#D8CEBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#0F4C5C] border border-[#E7DFD5]">
              <span>About the Practice</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0B3842] font-normal leading-tight">
              A human-centered commitment to listening and sound clarity.
            </h1>
            <p className="text-base sm:text-lg text-[#576563] leading-relaxed">
              At <strong>{BUSINESS_INFO.name}</strong>, hearing care is rooted in empathy, patient dialogue, and respectful accompaniment in Arconciel.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal leading-snug">
              Every person experiences sound differently. Hearing care must follow suit.
            </h2>

            <div className="space-y-4 text-sm text-[#576563] leading-relaxed">
              <p>
                Hearing loss is rarely just about decibel levels—it influences how comfortably you participate in conversations with family, how relaxed you feel in social settings, and how connected you stay to your surroundings.
              </p>
              <p>
                At <strong>{BUSINESS_INFO.name}</strong>, we approach each consultation with patience and an open ear. We understand that taking steps toward hearing support can raise questions and uncertainties. That is why our consultations are deliberately unhurried, providing a peaceful space to discuss your daily auditory environment without pressure or haste.
              </p>
              <p>
                Whether you are experiencing subtle difficulty discerning speech in noisy restaurants, rediscovering the richness of music, or seeking preventive ear protection, our role is to guide you toward solutions that seamlessly fit your lifestyle and comfort.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E7DFD5] space-y-1.5">
                <div className="flex items-center gap-2 text-[#0F4C5C] font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ethical Integrity</span>
                </div>
                <p className="text-xs text-[#576563]">
                  Neutral, independent guidance centered exclusively on your listening comfort.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7DFD5] space-y-1.5">
                <div className="flex items-center gap-2 text-[#0F4C5C] font-semibold text-xs uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Attentive Accompaniment</span>
                </div>
                <p className="text-xs text-[#576563]">
                  Continuous support and fine acoustic adjustments throughout your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Presentation */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8CEBE] p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-4 border-b border-[#D8CEBE] pb-6">
                <div className="w-14 h-14 rounded-full bg-[#0F4C5C] text-white flex items-center justify-center shrink-0">
                  <Ear className="w-7 h-7 text-[#E7DFD5]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#0B3842] font-medium">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#576563]">
                    Hearing Services Practice · Arconciel
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#1B2926]">
                <p className="font-semibold text-[#0B3842] uppercase tracking-wider">
                  Core Practice Commitments:
                </p>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                  <span>Unhurried one-on-one appointments</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                  <span>Clear, non-technical explanations of acoustic results</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                  <span>Companions and family members actively welcomed</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                  <span>Long-term hygiene and precision recalibration care</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8CEBE] space-y-2">
                <p className="text-xs font-medium text-[#0B3842]">
                  Consultation Arrangement:
                </p>
                <p className="text-xs text-[#576563]">
                  {BUSINESS_INFO.consultationModel}
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.phone.tel}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {BUSINESS_INFO.phone.display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Arconciel: Serene Setting */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B3842] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
            <AcousticWave variant="rings" className="w-96 h-96 text-[#B8A89A]" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#176375] text-xs font-semibold text-[#D8CEBE]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Canton of Fribourg, Switzerland</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              A serene setting designed for focused acoustic listening.
            </h2>

            <p className="text-sm sm:text-base text-[#E4EFF2]/85 leading-relaxed">
              Arconciel offers a peaceful village environment away from noisy downtown traffic and overcrowded commercial arcades. Located at <strong>{BUSINESS_INFO.address.street}</strong>, our practice provides a calm acoustic environment where your hearing can be assessed in tranquility, ensuring accurate evaluations and a comfortable experience from the moment you arrive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-[#D8CEBE]">
              <div className="p-4 rounded-xl bg-[#072329]/70 border border-[#176375]">
                <p className="font-medium text-white mb-1">Easy Access & Parking</p>
                <p className="text-[#E4EFF2]/70">Convenient arrival with accessible local parking in the immediate vicinity.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#072329]/70 border border-[#176375]">
                <p className="font-medium text-white mb-1">Regional Accessibility</p>
                <p className="text-[#E4EFF2]/70">Easily reachable from Fribourg, Marly, and surrounding Sarine valley communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl text-[#0B3842] font-normal">
            Arrange your hearing consultation
          </h2>
          <p className="text-sm text-[#576563] max-w-xl mx-auto">
            We are here to answer your questions and provide personalized support. Contact our office directly to arrange an appointment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.phone.tel}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F4C5C] text-white font-medium hover:bg-[#0B3842] transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-[#D8CEBE]" />
            <span>Call {BUSINESS_INFO.phone.display}</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF7F2] text-[#0B3842] border border-[#D8CEBE] font-medium hover:bg-[#E7DFD5]/60 transition-colors text-sm"
          >
            <Calendar className="w-4 h-4 text-[#0F4C5C]" />
            <span>Send an Inquiry</span>
          </button>
        </div>
      </section>

    </div>
  );
};
