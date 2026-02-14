import { ExperienceItem, Publication, SkillCategory } from './types.ts';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'mcmaster-ta-2',
    company: 'McMaster University',
    role: 'Teaching Assistant (Life Science 2CC3)',
    period: 'January 2026 - Present',
    location: 'Hamilton, Ontario',
    description: [
      'Serving as a Teaching Assistant for Life Science 2CC3: Fundamentals of Neuroscience.',
      'Facilitate weekly tutorials helping students understand neural systems, sensory processing, and disease progression.',
      'Grade assignments and proctor exams to ensure a comprehensive and fair learning experience.'
    ]
  },
  {
    id: 'mcmaster-ta-1',
    company: 'McMaster University',
    role: 'Teaching Assistant (Life Science 2A03)',
    period: 'August 2025 - December 2025',
    location: 'Hamilton, Ontario',
    description: [
      'Serving as a Teaching Assistant for Research Methods in Life Sciences.',
      'Facilitate weekly tutorials helping students build crucial skills in scientific inquiry, data interpretation, and communication.',
      'Grade assignments and proctor exams.'
    ]
  },
  {
    id: 'baycrest-ra',
    company: 'Baycrest',
    role: 'Memory Lab - Research Assistant',
    period: 'April 2024 - Present',
    location: 'Toronto, Ontario',
    description: [
      'Under the guidance of Dr. Addis, contributing to research on memory and aging.',
      'Support studies utilizing magnetoencephalography (MEG) and MRI to understand component processes of imagining future events.',
      'Assist with data collection and analysis, and participate in research rounds and weekly lab discussions.'
    ]
  },
  {
    id: 'baycrest-summer',
    company: 'Baycrest',
    role: 'Memory Lab - Summer Student',
    period: 'May 2025 - July 2025',
    location: 'Toronto, Ontario',
    description: [
      'Served as second author on the research paper "Open Sharing of Neuroscience Data in the Canadian Context".',
      'Analyzed 244 studies and 2,912 participant consent decisions to create a framework for Open Science practices.',
      'Developed a practical guide to make data sharing more accessible and ethically sound.'
    ]
  },
  {
    id: 'good-shepherd',
    company: 'Hamilton Good Shepherd',
    role: 'Volunteer Experience',
    period: '2023 - Present',
    location: 'Hamilton, Ontario',
    description: [
      'Assisted vulnerable populations at a food bank with several vaccines (MMR, COVID, influenza).',
      'Handled data entry and documentation.'
    ]
  },
  {
    id: 'mission-services',
    company: 'Hamilton Mission Services',
    role: 'Volunteer Experience',
    period: '2023 - Present',
    location: 'Hamilton, Ontario',
    description: [
      'Working with Dr. Kerry Beal, I observed clinical decision-making, patient communication, and care for vulnerable populations.'
    ]
  },
  {
    id: 'camp-northland',
    company: "Camp Northland B'nai Brith",
    role: 'Mentor & Counselor',
    period: '2022 - 2024',
    location: 'Ontario, Canada',
    description: [
      'Mentored Counselors-in-Training (CITs) through modeling leadership and teaching camp protocols (2024).',
      'Oversaw care and development of young campers, ensuring safety and emotional well-being (2022-2024).',
      'Created programs to accommodate diverse camper needs aligned with safety standards.'
    ]
  },
  {
    id: 'camp-lifeguard',
    company: "Camp Northland B'nai Brith",
    role: 'Lifeguard & Windsports Staff',
    period: '2022 - 2024',
    location: 'Ontario, Canada',
    description: [
      'Prioritized camper safety through active lifeguarding.',
      'Taught campers how to sail, focusing on core skills, safety, and confidence.',
      'Assisted in teaching junior staff key responsibilities for waterfront safety.'
    ]
  },
  {
    id: 'gouter',
    company: 'Goûter',
    role: 'Baker',
    period: '2020 - 2024',
    location: 'Toronto, Ontario',
    description: [
      'Responsible for producing fresh foods in a French Patisserie.',
      'Trained new workers on specialized machinery.',
      'Ensured high-quality product standards.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Competencies',
    skills: ['Data Analysis', 'Open Science', 'Scientific Writing', 'Neuroscience', 'Sensory Motor Systems']
  },
  {
    title: 'Certifications',
    skills: [
      'National Lifeguard',
      'TCPS 2: Research Ethics',
      'Canadian Food Handlers Certification',
      'SafeTALK Suicide Prevention'
    ]
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Mentorship', 'Communication', 'Clinical Exposure', 'Team Collaboration', 'Conflict Resolution']
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Open Sharing of Data at a Canadian Neuroscience Institute',
    description: 'Analyzed 244 studies and 2,912 participant consent decisions to create a framework for current Open Science practices. Developed a practical guide to make data sharing more accessible and ethically sound.',
    role: 'Second Author',
    link: 'https://apertureneuro.org/article/154315-open-sharing-of-data-at-a-canadian-neuroscience-institute'
  },
  {
    title: 'First National Conference on Open Science and Open Scholarship',
    description: 'How can we accelerate scientific breakthroughs and make research more cost-effective? A key answer lies in Open Science, which aims to share participant data and results with other scientists, allowing the data to be used with new intentions.',
    role: 'Concordia University',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7366838301091078144/',
    image: 'https://i.ibb.co/kg85KJ8C/IMG-20251009-130647-01.jpg'
  }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/daniel-glube-75023a27a/',
  email: 'glubed@mcmaster.ca',
  phone: '647-313-5509'
};