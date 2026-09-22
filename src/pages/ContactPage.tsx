import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Car, 
  Bus, 
  Calendar,
  Ear,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/business';
import { ContactFormData, ContactFormErrors } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceInterest: 'hearing-consultation',
    preferredTime: 'flexible',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must contain at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[+0-9\s().-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 077 448 37 22).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or describe your inquiry.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Your message should be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating graceful frontend client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceInterest: 'hearing-consultation',
      preferredTime: 'flexible',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      
      {/* Page Header */}
      <section className="relative pt-12 md:pt-16 pb-12 bg-[#F3EFEA] border-b border-[#D8CEBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#0F4C5C] border border-[#E7DFD5]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Contact & Appointments</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0B3842] font-normal leading-tight">
              Get in touch with Anne Bilger Audition
            </h1>
            <p className="text-base sm:text-lg text-[#576563] leading-relaxed">
              We welcome your questions regarding hearing consultations, device care, or preventive sound protection in Arconciel.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Business Information & Validated Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8CEBE] p-8 sm:p-10 space-y-7">
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#576563]">
                  Practice Coordinates
                </span>
                <h2 className="font-serif text-3xl text-[#0B3842] font-medium mt-1">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-xs text-[#0F4C5C] font-medium mt-1">
                  {BUSINESS_INFO.category} · Arconciel
                </p>
              </div>

              <div className="space-y-6 text-sm text-[#1B2926]">
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7DFD5] flex items-center justify-center text-[#0F4C5C] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#576563] uppercase tracking-wider">
                      Telephone
                    </p>
                    <a
                      id="contact-page-phone-link"
                      href={BUSINESS_INFO.phone.tel}
                      className="text-lg sm:text-xl font-medium text-[#0F4C5C] hover:text-[#0B3842] hover:underline transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                    <p className="text-xs text-[#576563] mt-0.5">
                      Clickable for direct calling on mobile or computer
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7DFD5] flex items-center justify-center text-[#0F4C5C] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#576563] uppercase tracking-wider">
                      Practice Address
                    </p>
                    <p className="font-medium text-[#1B2926] mt-0.5">
                      {BUSINESS_INFO.address.street}
                    </p>
                    <p className="text-[#576563]">
                      {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                    </p>
                    <p className="text-xs text-[#576563]">
                      Canton of Fribourg, Switzerland
                    </p>
                  </div>
                </div>

                {/* Consultation schedule */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7DFD5] flex items-center justify-center text-[#0F4C5C] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#576563] uppercase tracking-wider">
                      Consultation Hours
                    </p>
                    <p className="font-medium text-[#1B2926] mt-0.5">
                      {BUSINESS_INFO.consultationModel}
                    </p>
                    <p className="text-xs text-[#576563] mt-1">
                      Monday through Friday by prior telephone or written request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D8CEBE] text-xs text-[#576563] space-y-2">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F4C5C]" />
                  <span>Confidential and personalized consultation setting.</span>
                </p>
                <p className="flex items-center gap-2">
                  <Ear className="w-4 h-4 text-[#0F4C5C]" />
                  <span>Ground floor with convenient local accessibility.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Frontend-Validated Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E7DFD5] p-8 sm:p-10 shadow-xs">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-serif text-3xl text-[#0B3842] font-medium">
                      Thank you for your message
                    </h3>
                    <p className="text-sm text-[#576563] leading-relaxed">
                      Your inquiry has been received. We will review your consultation request and contact you at <strong>{formData.phone || formData.email}</strong> to coordinate your appointment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] text-xs text-[#1B2926] max-w-sm mx-auto text-left space-y-1">
                    <p><span className="font-semibold text-[#0B3842]">Name:</span> {formData.fullName}</p>
                    <p><span className="font-semibold text-[#0B3842]">Preferred Contact:</span> {formData.phone}</p>
                    <p><span className="font-semibold text-[#0B3842]">Preferred Time:</span> {formData.preferredTime}</p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF8F5] border border-[#D8CEBE] text-xs font-semibold text-[#0B3842] hover:bg-[#E7DFD5]/60 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div>
                    <h3 className="font-serif text-2xl text-[#0B3842] font-medium">
                      Consultation Request & Inquiries
                    </h3>
                    <p className="text-xs text-[#576563] mt-1">
                      Please complete this brief form. We will contact you promptly to arrange your visit in Arconciel.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold text-[#1B2926] uppercase tracking-wider">
                      Full Name <span className="text-[#0F4C5C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jean Dupont"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#1B2926] placeholder-[#576563]/50 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] transition-all ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D8CEBE]'
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email (2 columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#1B2926] uppercase tracking-wider">
                        Phone Number <span className="text-[#0F4C5C]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 079 123 45 67"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#1B2926] placeholder-[#576563]/50 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] transition-all ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D8CEBE]'
                        }`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-[#1B2926] uppercase tracking-wider">
                        Email Address <span className="text-[#0F4C5C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jean.dupont@bluewin.ch"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#1B2926] placeholder-[#576563]/50 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] transition-all ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D8CEBE]'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Interest & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="serviceInterest" className="block text-xs font-semibold text-[#1B2926] uppercase tracking-wider">
                        Service of Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#D8CEBE] text-sm text-[#1B2926] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                      >
                        <option value="hearing-consultation">Personalized Hearing Consultation</option>
                        <option value="adaptation-guidance">Hearing Solutions & Adaptation Guidance</option>
                        <option value="maintenance-check">Acoustic Check-up & Device Care</option>
                        <option value="hearing-protection">Custom Hearing Protection & Noise Advice</option>
                        <option value="general-inquiry">General Question / Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#1B2926] uppercase tracking-wider">
                        Preferred Time of Day
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#D8CEBE] text-sm text-[#1B2926] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                      >
                        <option value="flexible">Flexible / Any Time</option>
                        <option value="morning">Morning (09:00 – 12:00)</option>
                        <option value="afternoon">Afternoon (14:00 – 17:30)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-[#1B2926] uppercase tracking-wider">
                      Your Message or Hearing Concern <span className="text-[#0F4C5C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know how we can assist you or any particular listening challenges you are experiencing..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#1B2926] placeholder-[#576563]/50 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] transition-all resize-y ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D8CEBE]'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0F4C5C] hover:bg-[#0B3842] text-white font-medium shadow-sm transition-all text-sm disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Processing your request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D8CEBE]" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#576563] mt-2">
                      Your privacy is respected. Information submitted is solely used to coordinate your appointment.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Location & Directions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FAF7F2] border border-[#D8CEBE] p-8 sm:p-12 space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F4C5C]">
              Access & Directions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B3842] font-normal">
              Visiting Pré-de-l'Arche 4 in Arconciel
            </h2>
            <p className="text-sm text-[#576563] leading-relaxed">
              Arconciel is situated in the scenic Sarine district, just a short drive from Marly and Fribourg. Our practice is positioned for calm arrival and effortless access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* By Car */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DFD5] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#0B3842] font-medium">By Private Vehicle</h3>
                  <p className="text-xs text-[#576563]">Via Route de Fribourg / Route de Marly</p>
                </div>
              </div>
              <p className="text-xs text-[#576563] leading-relaxed">
                From Fribourg or Marly, follow the cantonal route heading toward Arconciel. Follow local signage toward Pré-de-l'Arche. Convenient parking spaces are situated directly adjacent for our visitors.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#0F4C5C]">
                Free and stress-free local parking
              </div>
            </div>

            {/* By Public Transit */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DFD5] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E4EFF2] text-[#0F4C5C] flex items-center justify-center">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#0B3842] font-medium">By Regional Bus (TPF)</h3>
                  <p className="text-xs text-[#576563]">Connections from Fribourg Gare & Marly</p>
                </div>
              </div>
              <p className="text-xs text-[#576563] leading-relaxed">
                Regular regional bus connections serve Arconciel from Fribourg main railway station and Marly Cité. The local stop is situated within comfortable walking distance to Pré-de-l'Arche 4.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#0F4C5C]">
                Pedestrian-friendly, peaceful village walk
              </div>
            </div>

          </div>

          {/* Interactive Coordinates Summary Card */}
          <div className="p-6 rounded-2xl bg-[#0B3842] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-[#B8A89A] font-mono">
                Direct Contact Card
              </p>
              <p className="font-serif text-xl font-medium">
                {BUSINESS_INFO.name}
              </p>
              <p className="text-xs text-[#E4EFF2]/80">
                {BUSINESS_INFO.address.street} · {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, Switzerland
              </p>
            </div>

            <a
              id="directions-call-button"
              href={BUSINESS_INFO.phone.tel}
              className="px-5 py-3 rounded-xl bg-white text-[#0B3842] font-semibold text-xs hover:bg-[#FAF7F2] transition-colors shrink-0"
            >
              Call {BUSINESS_INFO.phone.display}
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
