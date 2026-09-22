import { NavItem, ServiceItem, FaqItem, ConsultationStep } from '../types';

export const BUSINESS_INFO = {
  name: 'Anne Bilger Audition Sàrl',
  shortName: 'Anne Bilger Audition',
  category: 'Hearing Services',
  tagline: 'Attentive, human-centered hearing care in Arconciel',
  address: {
    street: "Pré-de-l'Arche 4",
    postalCode: '1732',
    city: 'Arconciel',
    canton: 'Fribourg',
    country: 'Switzerland',
    full: "Pré-de-l'Arche 4, 1732 Arconciel, Switzerland",
  },
  phone: {
    display: '077 448 37 22',
    tel: 'tel:0774483722',
    raw: '0774483722',
  },
  consultationModel: 'Consultations by prior appointment to guarantee dedicated, unhurried attention.',
  hours: [
    { days: 'Monday – Friday', times: 'By appointment' },
    { days: 'Saturday & Sunday', times: 'Closed' },
  ],
  accessibility: 'Calm ground-floor accessibility with convenient local parking in Arconciel.',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '#home' },
  { id: 'services', label: 'Hearing Services', path: '#services' },
  { id: 'about', label: 'About the Practice', path: '#about' },
  { id: 'faq', label: 'FAQ', path: '#faq' },
  { id: 'contact', label: 'Contact', path: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'hearing-consultation',
    title: 'Personalized Hearing Consultation',
    tagline: 'A calm, dedicated dialogue regarding your auditory comfort and everyday listening needs.',
    description:
      'Every hearing experience is unique. We take the necessary time to discuss your daily communication environments, challenges in social conversations, and auditory history in a peaceful consultation setting.',
    details: [
      'Comprehensive discussion of personal listening environments',
      'Evaluation of subtle sound perception and speech comprehension needs',
      'Independent, patient-oriented advice tailored to your lifestyle',
      'Dedicated one-on-one attention with zero rushed appointments',
    ],
    iconName: 'Ear',
  },
  {
    id: 'adaptation-support',
    title: 'Hearing Solutions & Adaptation Guidance',
    tagline: 'Thoughtful accompaniment through modern hearing solutions and auditory adaptation.',
    description:
      'Selecting and adjusting hearing solutions is a gradual, collaborative process. We guide you step-by-step to help you adapt comfortably to natural sound landscapes and regain conversational ease.',
    details: [
      'Ergonomic analysis for optimal comfort and discreet placement',
      'Step-by-step acoustic fine-tuning based on your real-life feedback',
      'Guidance on familiarizing your brain with new sound layers',
      'Patient accompaniment throughout the entire adaptation phase',
    ],
    iconName: 'Sliders',
  },
  {
    id: 'maintenance-care',
    title: 'Acoustic Check-ups & Device Care',
    tagline: 'Regular verifications and hygienic maintenance to preserve consistent sound clarity.',
    description:
      'Hearing solutions require periodic check-ups and specialized cleaning to function at their best. We provide thorough hygiene care, functional checks, and fine acoustic recalibrations.',
    details: [
      'Deep cleaning of acoustic filters, earmolds, and sound tubes',
      'Verification of sound clarity, microphones, and electronics',
      'Preventive inspections to avoid moisture and cerumen buildup',
      'Adjustments to match changes in your auditory environment',
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'hearing-protection',
    title: 'Hearing Protection & Sound Wellness',
    tagline: 'Preventive solutions to preserve your hearing capital across work, music, and leisure.',
    description:
      'Protecting healthy hearing is as important as correcting hearing loss. We provide guidance on custom acoustic protection for musicians, industrial professionals, motorsports, and peaceful sleep.',
    details: [
      'Custom acoustic filters preserving sound fidelity while lowering decibels',
      'Tailored earplugs for swimming, water sports, and sleep serenity',
      'Professional sound protection advice for high-noise occupational settings',
      'Sensory preservation guidance for all stages of life',
    ],
    iconName: 'Sparkles',
  },
];

export const CONSULTATION_STEPS: ConsultationStep[] = [
  {
    step: '01',
    title: 'Initial Dialogue & Listening History',
    description:
      'We welcome you in a quiet, unhurried space to discuss your daily listening routine, family and professional interactions, and the specific sound nuances you wish to rediscover.',
    focus: 'Understanding your unique auditory reality',
  },
  {
    step: '02',
    title: 'Auditory Assessment & Sound Clarity Analysis',
    description:
      'Through precise, comfortable acoustic evaluations, we measure frequency response, speech comprehension thresholds, and sound dynamics in quiet and conversational settings.',
    focus: 'Accurate, objective evaluation',
  },
  {
    step: '03',
    title: 'Collaborative Solution Selection',
    description:
      'Together, we explore suitable hearing approaches that harmonize with your dexterity, aesthetic preferences, communication habits, and personal acoustic goals.',
    focus: 'Tailored, transparent recommendations',
  },
  {
    step: '04',
    title: 'Gradual Acclimatization & Ongoing Support',
    description:
      'You experience sounds in your natural daily surroundings with follow-up appointments to gently adjust volume dynamics and ensure enduring comfort.',
    focus: 'Continuous care & lasting peace of mind',
  },
];

export const REASONS_TO_SEEK_SUPPORT = [
  {
    title: 'Effortless Social Conversations',
    description:
      'Following discussions in lively dinners or family gatherings becomes natural again without exhausting lip-reading or mental strain.',
  },
  {
    title: 'Rediscovering Nuanced Sounds',
    description:
      'From birdsong and rustling leaves to soft music and gentle footsteps, rediscover the subtle acoustic textures that enrich everyday life.',
  },
  {
    title: 'Alleviating Auditory Fatigue',
    description:
      'Straining to decipher unclear speech consumes cognitive energy. Professional hearing guidance helps restore relaxed, spontaneous listening.',
  },
  {
    title: 'Preserving Cognitive Agility',
    description:
      'Clear auditory stimulation keeps neural pathways active and helps maintain confidence, social engagement, and well-being as you age.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'early-signs',
    category: 'hearing',
    question: 'What are the early indicators that my hearing may have changed?',
    answer:
      'Hearing changes often develop gradually. Common signs include frequently asking family members to repeat themselves, turning up the television louder than others prefer, struggling to distinguish speech in bustling places, or feeling unusually tired after social interactions.',
  },
  {
    id: 'consultation-prep',
    category: 'consultation',
    question: 'How should I prepare for my first appointment in Arconciel?',
    answer:
      'You do not need any special preparation. It is often helpful to reflect on specific situations where you notice listening difficulties (e.g., in the car, at meetings, on the phone). You are warmly invited to bring a family member or close friend to support you and share observations.',
  },
  {
    id: 'adaptation-time',
    category: 'daily',
    question: 'How long does it typically take to get used to hearing care solutions?',
    answer:
      'The auditory cortex takes time to re-learn everyday acoustic cues that may have been missing for months or years. Most people experience an initial adjustment period of several weeks. We schedule follow-up appointments to refine the settings gradually as your comfort grows.',
  },
  {
    id: 'appointment-system',
    category: 'general',
    question: 'Why are consultations scheduled exclusively by appointment?',
    answer:
      'Quality hearing care requires dedicated focus, quiet surroundings, and adequate time for meaningful conversation. Working by appointment ensures that you receive our undivided professional attention without interruption or waiting.',
  },
  {
    id: 'maintenance-frequency',
    category: 'daily',
    question: 'How frequently should hearing devices undergo maintenance check-ups?',
    answer:
      'We recommend regular preventive check-ups every 4 to 6 months to clean microscopic acoustic filters, inspect microphones, and make fine adjustments. Timely maintenance preserves acoustic precision and extends equipment longevity.',
  },
  {
    id: 'protection-value',
    category: 'hearing',
    question: 'Can hearing protection help even if I already have hearing loss?',
    answer:
      'Yes, absolutely. Protecting your remaining hearing capital against loud acoustic spikes, recreational noise, or machinery is essential to prevent further auditory fatigue and damage.',
  },
];

export const HELPFUL_INSIGHTS = [
  {
    tag: 'Auditory Perception',
    title: 'Hearing is a Brain Activity',
    summary:
      'Our ears capture sound waves, but our brain interprets them into meaning and emotion. Addressing hearing changes early supports active cognitive processing and memory.',
  },
  {
    tag: 'Social Well-being',
    title: 'The Connection to Confidence',
    summary:
      'When listening requires constant tension, individuals often begin avoiding group conversations. Reclaiming sound clarity restores natural ease in friendships and family life.',
  },
  {
    tag: 'Acoustic Acoustics',
    title: 'Everyday Sound Environments',
    summary:
      'From tiled dining rooms to open-air walks along the Sarine valley, different physical spaces reflect sound differently. Tailored acoustic settings help you feel comfortable in every venue.',
  },
];
