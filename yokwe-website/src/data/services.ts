export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'corporate-commercial',
    title: 'Corporate & Commercial Litigation',
    description: 'Strategic legal counsel in corporate governance, shareholder agreements, and commercial contracts, with representation in High Court and specialized tribunals.',
    icon: 'building'
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    description: 'Representation in contractual disputes, property claims, and debt enforcement, balancing legal rigor with practical strategies to achieve enforceable outcomes.',
    icon: 'scale'
  },
  {
    id: 'criminal-litigation',
    title: 'Criminal Litigation',
    description: 'Defense and advisory services across criminal matters, ensuring protection of constitutional rights and procedural fairness throughout the criminal justice process. This includes appeals, reviews and petitions in the Superior Courts of the Republic of South Africa.',
    icon: 'gavel'
  },
  {
    id: 'family-law',
    title: 'Family Law',
    description: 'Guidance in divorce, child custody, guardianship, and maintenance proceedings, grounded in the Children\'s Act, Divorce Act, and Maintenance Act.',
    icon: 'users'
  },
  {
    id: 'wills-estates',
    title: 'Wills & Estates',
    description: 'Drafting of wills, administration of deceased estates, and estate planning in compliance with the Wills Act and Administration of Estates Act.',
    icon: 'file-text'
  },
  {
    id: 'construction-law',
    title: 'Construction Law',
    description: 'Advising on construction contracts, disputes, and regulatory compliance within South African building and construction legislation, as well as representation in Courts and specialised tribunals.',
    icon: 'hard-hat'
  },
  {
    id: 'labour-law',
    title: 'Labour Law',
    description: 'Expert services in employment disputes, unfair dismissal, discrimination, and workplace compliance under the Labour Relations Act and BCEA.',
    icon: 'briefcase'
  },
  {
    id: 'immigration',
    title: 'Immigration',
    description: 'Legal guidance on visas, work permits, residency applications, and compliance with the Immigration Act for individuals and corporates.',
    icon: 'globe'
  },
  {
    id: 'bail-applications',
    title: 'Bail Applications',
    description: 'Representation in bail proceedings, ensuring constitutional rights are upheld in accordance with the Criminal Procedure Act.',
    icon: 'shield'
  },
  {
    id: 'nca-solutions',
    title: 'National Credit Act Solutions',
    description: 'Assistance in debt review, reckless lending matters, and compliance with the National Credit Act to promote responsible lending and borrowing practices.',
    icon: 'credit-card'
  },
  {
    id: 'consumer-protection',
    title: 'Consumer Protection',
    description: 'Advisory and representation in disputes governed by the Consumer Protection Act, including defective goods, unfair practices, and enforcement of consumer rights.',
    icon: 'shopping-cart'
  },
  {
    id: 'maintenance',
    title: 'Maintenance Matters',
    description: 'Legal support in child and spousal maintenance cases, prioritizing the interests of dependents in accordance with the Maintenance Act.',
    icon: 'heart'
  },
  {
    id: 'parole',
    title: 'Parole & Correctional Services',
    description: 'Representation in parole hearings, correctional supervision, and enforcement of prisoner rights under the Correctional Services Act.',
    icon: 'lock'
  },
  {
    id: 'administrative-constitutional',
    title: 'Administrative & Constitutional Law',
    description: 'Challenging administrative decisions, enforcing constitutional rights, and pursuing judicial reviews under the Constitution and PAJA.',
    icon: 'landmark'
  },
  {
    id: 'medical-negligence',
    title: 'Medical Negligence & Malpractice Claims',
    description: 'Representation in claims against healthcare professionals and institutions, ensuring accountability under the Health Professions Act and common law principles.',
    icon: 'activity'
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury Claims',
    description: 'Assisting clients with claims arising from accidents and occupational injuries, to secure just compensation.',
    icon: 'user-x'
  },
  {
    id: 'mining-law',
    title: 'Mining Law Litigation',
    description: 'Legal services for disputes in the mining sector, including mineral rights, environmental compliance, and regulatory compliance.',
    icon: 'mountain'
  }
];
