// The Mind — Featured projects. Images from /public/projects/ (local, high-quality).
export const projectsList = [
  {
    id: 'solar-care',
    slug: 'solar-care',
    title: 'Solar Care',
    category: 'WEB PLATFORM',
    description: 'Solar energy solutions and sustainable platform',
    year: '2024',
    url: 'https://solarcare.netlify.app/',
    image: '/projects/project1/1.webp',
    images: [
      '/projects/solar-care-detail-1.jpg',
      '/projects/solar-care-detail-2.jpg',
      '/projects/solar-care-detail-3.jpg',
    ],
    desc: 'A modern web platform for solar energy solutions and sustainable living. Built with performance and user experience in mind, showcasing clean design and clear calls to action for renewable energy adoption.',
    services: ['Web Development', 'UI/UX Design', 'Performance Optimization', 'Responsive Design'],
    client: 'Solar Care — Delivered 2024',
  },
  {
    id: 'voltz-murex',
    slug: 'voltz-murex',
    title: 'Voltz Murex',
    category: 'WEB APPLICATION',
    description: 'Dynamic fintech and data-driven interface',
    year: '2025',
    url: 'https://voltz-murex.vercel.app/',
    image: '/projects/project2/1.png',
    images: [
      '/projects/voltz-murex-detail-1.jpg',
      '/projects/voltz-murex-detail-2.jpg',
      '/projects/voltz-murex-detail-3.jpg',
    ],
    desc: 'A high-performance web application with a focus on data visualization and user workflows. Delivers a polished, professional experience with attention to security and detail.',
    services: ['Frontend Development', 'Data Visualization', 'UX/UI Design', 'Security Best Practices'],
    client: 'Voltz Murex — Delivered 2025',
  },
  {
    id: 'elektra',
    slug: 'elektra',
    title: 'Elektra',
    category: 'WEB PLATFORM',
    description: 'Electric and energy-focused digital experience',
    year: '2024',
    url: 'https://elektra-blond.vercel.app/',
    image: '/projects/project3/1.png',
    images: [
      '/projects/elektra-detail-1.jpg',
      '/projects/elektra-detail-2.jpg',
      '/projects/elektra-detail-3.jpg',
    ],
    desc: 'An electric and energy-focused web platform with a clear, modern interface. Emphasizes usability, accessibility, and a high level of attention to detail in both design and implementation.',
    services: ['Web Development', 'UI/UX Design', 'Accessibility', 'Responsive Design'],
    client: 'Elektra — Delivered 2024',
  },
];

// Training / education imagery (e.g. for About or training section)
export const trainingImage = '/projects/projects.png';

export const getProjectBySlug = (slug) => projectsList.find((p) => p.slug === slug) || projectsList[0];
export const getProjectById = (id) => projectsList.find((p) => p.id === id) || projectsList[0];
