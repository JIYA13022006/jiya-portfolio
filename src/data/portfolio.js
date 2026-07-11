// Centralized content for the portfolio.
// Edit this file to update text, links, skills, and projects across the site.

export const profile = {
  name: 'Jiya Jain',
  roles: [
    'Computer Science Engineering Student',
    'Software Developer',
    'Java Developer',
    'Problem Solver',
  ],
  intro:
    'Fourth-year Computer Science Engineering student passionate about software development, full-stack applications, and problem-solving.',
  email: 'jainjiya13022006@gmail.com',
  github: 'https://github.com/JIYA13022006',
  linkedin: 'https://www.linkedin.com/in/jiya-jain-9453bb311',
  resumeUrl: '/resume.pdf',
  location: 'Mandsaur, Madhya Pradesh, India',
}

export const about = {
  paragraph:
    "I'm a fourth-year Computer Science Engineering student at Mandsaur University with a strong foundation in full-stack development and Java. I enjoy turning ideas into working software — from designing clean REST APIs to building responsive interfaces — and I spend my free time sharpening my problem-solving skills through consistent DSA practice. I'm currently looking for internship and entry-level software engineering opportunities where I can contribute, learn from experienced engineers, and grow into a well-rounded developer.",
  highlights: [
    { label: 'B.Tech Computer Science Engineering', icon: 'graduation' },
    { label: 'Full-Stack Development', icon: 'layers' },
    { label: 'Java Development', icon: 'coffee' },
    { label: 'DSA Practice', icon: 'git-branch' },
    { label: 'Problem Solving', icon: 'puzzle' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    comment: '// core',
    skills: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Frontend',
    comment: '// client',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    comment: '// server',
    skills: [
      { name: 'Spring Boot' },
      { name: 'REST APIs' },
      { name: 'Spring Security' },
      { name: 'JWT Authentication' },
    ],
  },
  {
    title: 'Database',
    comment: '// storage',
    skills: [{ name: 'MySQL' }, { name: 'MongoDB' }],
  },
  {
    title: 'Tools',
    comment: '// workflow',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Maven' },
      { name: 'Postman' },
    ],
  },
]

export const projects = [
  {
    id: 'smart-expense-tracker',
    name: 'Smart Expense Tracker',
    fileLabel: 'smart-expense-tracker/',
    description:
      'A full-stack personal finance management platform built using Java, Spring Boot, React.js, and MySQL.',
    features: [
      'JWT Authentication',
      'Expense Tracking',
      'Income Management',
      'Financial Dashboard',
      'Analytics Charts',
      'Budget Planning',
      'Multi-Currency Support',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT'],
    github: 'https://github.com/JIYA13022006/smart-expense-tracker',
    demo: '#',
    accent: 'violet',
  },
  {
    id: 'sigmagpt',
    name: 'SigmaGPT',
    fileLabel: 'sigmagpt/',
    description: 'AI-powered productivity and assistance platform.',
    features: [
      'AI Chat',
      'Productivity Tools',
      'Responsive UI',
      'API Integration',
    ],
    tech: ['React.js', 'Node.js', 'API Integration'],
    github: 'https://github.com/JIYA13022006',
    demo: '#',
    accent: 'gold',
  },
  {
    id: 'wanderlust',
    name: 'Wanderlust',
    fileLabel: 'wanderlust/',
    description: 'Travel and holiday booking application.',
    features: [
      'User Authentication',
      'Destination Listings',
      'Booking Management',
      'MVC Architecture',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/JIYA13022006',
    demo: '#',
    accent: 'mint',
  },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Computer Science Engineering',
  university: 'Mandsaur University',
  status: 'Fourth-Year Student',
  years: '2023 — 2027 (Expected)',
}

export const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
]

export const achievements = [
  {
    title: 'Built Multiple Full-Stack Projects',
    detail:
      'Designed and shipped end-to-end applications spanning React front ends, Spring Boot APIs, and relational/NoSQL databases.',
  },
  {
    title: 'Active DSA Practice',
    detail:
      'Consistently solving data structures and algorithms problems to build strong fundamentals for technical interviews.',
  },
  {
    title: 'Strong Foundation in Java and Web Development',
    detail:
      'Hands-on experience across the Java ecosystem and modern web development, from backend services to responsive UI.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
