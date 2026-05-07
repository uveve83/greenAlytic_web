// ── SLIDES ────────────────────────────────────────────────
export const SLIDES = [
  {
    bg: '/img/one.jpg',
    badge: "Rwanda's leading clean mobility platform",
    lines: ['Clean mobility', 'works better here.'],
    accentLine: 1,
    sub: 'Track vehicle emissions in real-time and drive change with expert-built monitoring solutions.',
    cta1: { label: 'Request a demo', to: '/contact' },
    cta2: { label: 'View dashboard', to: '/login', icon: 'fa-chart-line' },
  },
  {
    bg: '/img/two.jpg',
    badge: 'Zero-emission transport',
    lines: ['Electric tricycles', 'built for Africa.'],
    accentLine: 1,
    sub: 'Purpose-engineered for rural and peri-urban logistics — zero emissions, low maintenance, full performance.',
    cta1: { label: 'See our products', to: '/products' },
    cta2: { label: 'Get in touch', to: '/contact', icon: 'fa-envelope' },
  },
  {
    bg: '/img/three.jpg',
    badge: 'IoT Fleet Management',
    lines: ['Full visibility', 'into your fleet.'],
    accentLine: 1,
    sub: 'Live dashboards, automated alerts, and emissions analytics — giving you the data to act faster.',
    cta1: { label: 'Access dashboard', to: '/login' },
    cta2: { label: 'Our services', to: '/services', icon: 'fa-cogs' },
  },
  {
    bg: '/img/four.jpg',
    badge: 'Locally engineered since 2022',
    lines: ['Rwandan innovation.', 'Continental impact.'],
    accentLine: 0,
    sub: 'Built and maintained by local engineers, designed for African roads, scaled for the continent.',
    cta1: { label: 'Our story', to: '/about' },
    cta2: { label: 'Partner with us', to: '/contact', icon: 'fa-handshake' },
  },
];

// ── NAV ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About us',     to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Projects',     to: '/projects' },
  { label: 'Products',     to: '/products' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact',      to: '/contact' },
];

// ── STATS ─────────────────────────────────────────────────
export const STATS = [
  { value: '15+',  label: 'Strategic partners' },
  { value: '1000+', label: 'Clients served' },
  { value: '24/7', label: 'Real-time monitoring' },
  { value: '100%', label: 'Local engineering' },
  { value: '4+',   label: 'Years in operation' },
];

// ── SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  {
    icon: 'fa-satellite-dish',
    title: 'Emissions Monitoring',
    desc: 'Real-time tracking of VOC, CO, NO₂, and HC with live alerts. Ideal for regulatory compliance and fleet optimisation.',
  },
  {
    icon: 'fa-bolt',
    title: 'Electric Tricycles',
    desc: 'Zero-emission cargo tricycles purpose-built for African terrain — steady performance in rural and peri-urban logistics.',
  },
  {
    icon: 'fa-network-wired',
    title: 'IoT Fleet Management',
    desc: 'Smart dashboards for full operational visibility. Monitor every vehicle live and automate insights for maximum efficiency.',
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Vehicle Inspection & Repair',
    desc: 'Pollution-related diagnostics and certified repair services to keep your fleet compliant and road-ready.',
  },
  {
    icon: 'fa-leaf',
    title: 'Green System Installation',
    desc: 'Professional installation of green vehicle systems by certified technicians — minimal downtime, maximum impact.',
  },
  {
    icon: 'fa-chart-bar',
    title: 'Analytics & Reporting',
    desc: 'Automated compliance reports, emission trend analysis, and fleet benchmarking for data-driven decisions.',
  },
];

// ── DASHBOARD FEATURES ────────────────────────────────────
export const DASH_FEATURES = [
  'VOC tracking', 'CO monitoring', 'NO₂ levels', 'HC detection',
  'Live alerts', 'Data export', 'Multi-device', 'Role access',
];

// ── PARTNERS ──────────────────────────────────────────────
export const PARTNERS = [
  // Existing partners
  { name: '250 Startups',  logo: '/images/250STARTUP logo.jpg' },
  { name: 'IPR Karongi',   logo: '/images/IPR Karonig logo.jpg' },
  { name: 'NCST Rwanda',   logo: '/images/NCST.jpg' },
  { name: 'IOM Rwanda',    logo: '/images/IOM Rwanda.jpg' },
  
  // NEW PARTNERS - Add your partners below
  { name: 'REMA',         logo: '/images/REMA.png' },
  { name: '',      logo: '/images/CMU.jpg' },
  { name: 'Rwanda Transport', logo: '/images/REM.png' },
  { name: 'ESP', logo: '/images/ESP.png' },
  { name: 'ICT Chamber',logo: '/images/ICT.jpg' },
  { name: 'BENO',           logo: '/images/BENO.png' },
];

// ── TESTIMONIALS ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    initials: 'TM',
    name: 'Transport Manager',
    company: 'Kigali Logistics Company',
    text: "Greenalytic's monitoring system helped us achieve regulatory compliance and identify vehicle issues we didn't even know existed. A game-changer for our fleet.",
  },
  {
    initials: 'AC',
    name: 'Agricultural Cooperative',
    company: 'Southern Province, Rwanda',
    text: 'The electric tricycles transformed our rural deliveries. Zero emissions, low maintenance, and exceptional team support from day one.',
  },
  {
    initials: 'EO',
    name: 'Environmental Officer',
    company: 'Government Agency',
    text: 'Real-time emissions data made compliance reporting dramatically easier. Greenalytic understands the local context better than anyone.',
  },
];

// ── ABOUT CHECKLIST ───────────────────────────────────────
export const ABOUT_CHECKS = [
  'Advanced emissions monitoring for regulatory compliance',
  'Electric cargo tricycles designed for African terrain',
  'Full-stack IoT fleet management with live dashboards',
  'Built and maintained by Rwandan engineers',
];