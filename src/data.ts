import { Skill, Project, TimelineEvent, Certification, Statistic, Goal } from './types';

export const sandeepAbout = {
  name: 'Sandeep',
  location: 'Samastipur, Bihar, India',
  role: 'Aspiring Software Developer',
  email: 'sandeepkumar28wu@gmail.com',
  whatsapp: '916299105432', // Mock dynamic link setup helper or use general standard contact
  github: 'https://github.com/SandeepKumarSamastipur', // Placeholder profile
  linkedin: 'https://linkedin.com/in/sandeep-samastipur', // Placeholder profile
  avatar: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=600&h=750',
  bio: 'I am a highly motivated student and aspiring software developer based in Samastipur, Bihar. Passionate about modern web and mobile applications, I spend my time crafting projects and acquiring new industry-ready skills. I love bringing ideas to life using a unique combination of classical languages like JavaScript and state-of-the-art AI-assisted development paradigms. My quest is to push the boundaries of what is possible as a developer and build tools that empower people.',
  longBio: 'My journey into software started with curiosity about how the web works, which soon exploded into high-intensity learning of HTML, CSS, and modern JavaScript. I then discovered the world of App Development through React Native, which quickly captured my focus as it allows for cross-platform utility. Simultaneously, having worked with WordPress, I learned how to set up, secure, and deliver fast visual experiences. Today, I actively use AI tools to supercharge my development workflow—allowing me to scaffold complex ideas in hours rather than months. Along with coding, I am heavily focused on mastering English communication to work seamlessly with high-performing global teams.'
};

export const skillsData: Skill[] = [
  { name: 'HTML5 & Semantic Markup', level: 90, category: 'frontend', iconName: 'HtmlIcon' },
  { name: 'CSS3 & Tailwind CSS', level: 85, category: 'frontend', iconName: 'CssIcon' },
  { name: 'JavaScript (ES6+)', level: 75, category: 'frontend', iconName: 'JsIcon' },
  { name: 'WordPress Development', level: 80, category: 'development-tools', iconName: 'WordpressIcon' },
  { name: 'React Native', level: 60, category: 'frontend', iconName: 'ReactNativeIcon' },
  { name: 'AI Assisted Development', level: 90, category: 'development-tools', iconName: 'AiIcon' },
  { name: 'Content Writing', level: 70, category: 'other', iconName: 'WriterIcon' },
  { name: 'English Communication', level: 75, category: 'other', iconName: 'EnglishIcon' }
];

export const projectsData: Project[] = [
  {
    id: 'lexiquest',
    title: 'LexiQuest',
    description: 'An interactive word puzzle game that tests vocabulary skills with automated score tracking and progressive difficulty levels.',
    detailedDescription: 'LexiQuest is an educational word puzzle experience designed to help players expand their vocabulary in an engaging format. It features neat letter tiles, dynamic hint systems, and high-fidelity transitions that make vocabulary testing feel like a native mobile app.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    imagePlaceholderColor: 'from-blue-600 via-indigo-600 to-purple-600',
    featured: true,
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'bingo-chat',
    title: 'Bingo Chat',
    description: 'A responsive visual web chat template showcasing active user lists, custom bubble styling, and status indicators.',
    detailedDescription: 'Bingo Chat is a front-end messenger concept engineered with real-time feedback animations. It focuses heavily on tactile UI elements, clean glassmorphic chat boxes, bubble animations, and immediate scroll-to-bottom mechanics for a natural chat feel.',
    technologies: ['React', 'Tailwind CSS', 'Motion', 'State Management'],
    imagePlaceholderColor: 'from-emerald-500 via-teal-600 to-cyan-600',
    featured: true,
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'orbit-pop',
    title: 'Orbit Pop',
    description: 'An addictive canvas-based orbital physics and bubble popping game featuring velocity vectors and responsive audio effects.',
    detailedDescription: 'Orbit Pop places players at the center of physics-driven celestial rings where they must launch bubbles to clear matching objects. It uses high-performance custom collision detection and smooth math vector integrations.',
    technologies: ['HTML5 Canvas', 'CSS3', 'JavaScript Math', 'Audio API'],
    imagePlaceholderColor: 'from-pink-500 via-purple-600 to-indigo-700',
    featured: true,
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'A precise micro-utility that computes exact age in years, months, weeks, days, and seconds, with zodiac and countdown events.',
    detailedDescription: 'This utility converts basic date inputs into a detailed dashboard of time elapsed. It includes a dark theme mode, celebratory birthday modals, and next-birthday live countdowns updated synchronously to the second.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript Date API'],
    imagePlaceholderColor: 'from-orange-500 to-pink-600',
    featured: false,
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'calculator-app',
    title: 'Calculator App',
    description: 'A stylish dark-themed calculator with custom keyboard inputs, nested mathematical operation history, and responsive click vibration.',
    detailedDescription: 'Designed with beautiful skeuomorphic and glassmorphic button layers, this calculator manages long operational strings with precision, featuring bracket operations, percent conversions, and backspace memory arrays.',
    technologies: ['CSS Glassmorphism', 'JavaScript Regex', 'LocalHistory'],
    imagePlaceholderColor: 'from-violet-600 to-indigo-900',
    featured: false,
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'to-do-list',
    title: 'To Do List App',
    description: 'A clean micro-task board with categorized lists, customized state filters (all, active, finished), and persistent memory.',
    detailedDescription: 'A custom, focused task board featuring daily highlights, drag-to-delete indicator lines, category tags, and browser auto-retrieval so tasks are never lost on system restarts.',
    technologies: ['React Native', 'AsyncStorage', 'Tailwind CSS'],
    imagePlaceholderColor: 'from-cyan-500 to-blue-700',
    featured: false,
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'status-saver',
    title: 'Status Saver App',
    description: 'A fluid utility template for media rendering, enabling users to organize, preview, and bookmark temporary files.',
    detailedDescription: 'Status Saver provides full multi-tab slide preview screens for files. Optimized for mobile, it features pinch-to-zoom images and full video player overlays for a seamless local media browsing experience.',
    technologies: ['React Native', 'Video Player', 'Expo Assets'],
    imagePlaceholderColor: 'from-sky-400 via-indigo-500 to-emerald-500',
    featured: false,
    liveUrl: '#',
    sourceUrl: '#'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Foundation in HTML & WordPress',
    description: 'Dived into web mechanics. Gained mastery in HTML5 document structure and built highly efficient custom landing pages using WordPress.',
    icon: 'code',
    status: 'completed'
  },
  {
    year: '2024 (Early)',
    title: 'CSS Styling & Design Principles',
    description: 'Learned advanced stylesheet strategies, flexbox, CSS grid, transitions, and Tailwind CSS. Started translating mental designs into visual code.',
    icon: 'palette',
    status: 'completed'
  },
  {
    year: '2024 (Late)',
    title: 'Interactivity with JavaScript',
    description: 'Mastered modern ES6+ Javascript, DOM manipulation, asynchronous state control, and Canvas-based game development. Built Orbit Pop and LexiQuest.',
    icon: 'zap',
    status: 'completed'
  },
  {
    year: '2025 (Early)',
    title: 'Mobile Architecture via React Native',
    description: 'Began applying JavaScript logic directly to mobile setups. Started learning native component rendering and client data caches for Android and iOS.',
    icon: 'smartphone',
    status: 'ongoing'
  },
  {
    year: '2025 (Current)',
    title: 'AI Assisted Engineering & Project Delivery',
    description: 'Integrated AI paradigms to speed up project prototyping. Focus on building real-world tools while polishing technical English and collaborating on GitHub.',
    icon: 'cpu',
    status: 'ongoing'
  }
];

export const certificationsData: Certification[] = [
  {
    title: 'Information Technology Certificate',
    issuer: 'Bihar Government (BSD)',
    date: 'June 2024',
    badgeColor: 'border-blue-500/50 text-blue-400 bg-blue-950/20',
    description: 'Certified in comprehensive computing principles, operating system management, and fundamental server configurations.'
  },
  {
    title: 'KYP (Kushal Yuva Program) Certification',
    issuer: 'Bihar Skill Development Mission',
    date: 'September 2024',
    badgeColor: 'border-teal-500/50 text-teal-400 bg-teal-950/20',
    description: 'Honored for excellence in soft skills, English communication competence, and advanced digital productivity tools.'
  },
  {
    title: 'DBDO Training Program',
    issuer: 'Technical IT Institute partner',
    date: 'February 2025',
    badgeColor: 'border-purple-500/50 text-purple-400 bg-purple-950/20',
    description: 'Focused skill-building track covering web data structures, local server management, and application lifecycle deployment.'
  }
];

export const statisticsData: Statistic[] = [
  { label: 'Projects Built', value: 7, suffix: '+', iconName: 'FolderCode' },
  { label: 'Skills Mastered', value: 8, suffix: '', iconName: 'Compass' },
  { label: 'Certifications', value: 3, suffix: '', iconName: 'FileCheck' },
  { label: 'Study Hours', value: 1200, suffix: 'h', iconName: 'Clock' }
];

export const goalsData: Goal[] = [
  {
    title: 'Full Stack Software Engineer',
    description: 'Master backend technologies like Node.js, databases, and clean system architecture to become a versatile professional developer.',
    iconName: 'Server',
    timeframe: 'Next 12 Months'
  },
  {
    title: 'Impactful App Production',
    description: 'Create and launch highly rated apps on Google Play Store and App Store that solve real-day problems for Indian users.',
    iconName: 'Smartphone',
    timeframe: 'Next 18 Months'
  },
  {
    title: 'Top Tier Engagement',
    description: 'Secure development roles in premier technology firms with high quality visual engineering cultures, expanding my collaborative skill sets.',
    iconName: 'Briefcase',
    timeframe: 'Next 24 Months'
  },
  {
    title: 'Lifelong Tech Evolution',
    description: 'Consistently absorb newer languages and frameworks, keeping pace with neural AI coding methodologies and cloud hosting.',
    iconName: 'Sparkles',
    timeframe: 'Forever'
  }
];
