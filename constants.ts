import { Stakeholder, ServiceItem, ImpactStat } from './types';

export const STAKEHOLDERS: Stakeholder[] = [
  {
    id: 'customers',
    title: 'Customers',
    description: 'Ordering food, groceries, and essentials from local neighborhoods with convenience and speed.',
    iconName: 'users',
    stat: '446M+ Hours Saved (2023)'
  },
  {
    id: 'dashers',
    title: 'Dashers',
    description: 'Delivery partners enjoying flexible earnings, working when and where they want.',
    iconName: 'bike',
    stat: '$15B+ Earned (2023)'
  },
  {
    id: 'merchants',
    title: 'Merchants',
    description: 'Restaurants and stores growing their business through delivery, pickup, and commerce tools.',
    iconName: 'store',
    stat: '70% Report Increased Profits'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'The core app connecting consumers to local restaurants.',
    imageUrl: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 'grocery',
    title: 'Grocery & Convenience',
    description: 'Fresh produce, household essentials, and snacks delivered.',
    imageUrl: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 'dashpass',
    title: 'DashPass',
    description: 'Subscription service offering $0 delivery fees on eligible orders.',
    imageUrl: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 'platform',
    title: 'Commerce Platform',
    description: 'White-label solutions for merchants to build their own delivery apps.',
    imageUrl: 'https://picsum.photos/400/300?random=4'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    label: 'Meals Delivered',
    value: '135M+',
    subtext: 'Via Project DASH'
  },
  {
    label: 'Deliveries',
    value: '8M+',
    subtext: 'For social impact orgs'
  },
  {
    label: 'Disaster Relief',
    value: '$440K',
    subtext: 'Grants awarded in 2023'
  },
  {
    label: 'Emissions',
    value: 'Net-Zero',
    subtext: 'Scope 1 & 2 since 2021'
  }
];

// Data for Recharts
export const PROJECT_DASH_DATA = [
  { year: '2018', meals: 0, label: 'Launch' },
  { year: '2023', meals: 100, label: '100M Milestone' },
  { year: '2025', meals: 125, label: 'Current Trend' },
];

export const DOORDASH_SYSTEM_INSTRUCTION = `
You are an expert AI assistant for "DashConnect", a dashboard about DoorDash. 
Your knowledge base is strictly limited to the following information provided about DoorDash.
Answer questions concisely and professionally.

Overview:
DoorDash (NASDAQ: DASH) is a local commerce platform founded in 2013, operating in 40+ countries. 
Mission: Help businesses grow, connect consumers, provide flexible earnings.
Stakeholders: Customers, Dashers (drivers), Merchants, and Businesses (DoorDash for Business).

Services:
- Marketplace: Food delivery.
- Grocery/Convenience/Retail: Delivery of non-food items, alcohol (21+), flowers, pet supplies.
- DashPass: Subscription for $0 delivery fees.
- Merchant Solutions: Self-Delivery (use own staff), Commerce Platform (branded apps).

Impact (Project DASH):
- Initiative to power delivery for food banks/pantries.
- 8M+ deliveries, 135M+ meals delivered, 5M+ hours saved for recipients.
- "Food as Medicine" programs supported.

Safety:
- "Driving Insights" for Dashers (braking/acceleration feedback).
- Reduced notifications while driving.

Sustainability:
- Net-zero Scope 1 & 2 emissions since 2021.
- Encourages e-bikes/EVs.

Financial/Scale (2023 Metrics):
- Dashers earned $15B+.
- Consumers saved 446M hours.
- 70% of merchants reported increased profits.
`;
