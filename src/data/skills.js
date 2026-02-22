import { Code, Database, Wrench } from 'lucide-react';

export const skillCategories = {
  ai: {
    icon: Code,
    items: [
      { name: 'Python (Pandas/NumPy)', level: 92 },
      { name: 'Machine Learning', level: 88 },
      { name: 'Predictive Analytics', level: 85 },
      { name: 'Big Data Fundamentals', level: 82 },
      { name: 'Data Processing', level: 86 },
      { name: 'AI Model Development', level: 80 }
    ]
  },
  mobile: {
    icon: Code,
    items: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 88 },
      { name: 'React Native', level: 75 },
      { name: 'Cross-platform Development', level: 85 }
    ]
  },
  frontend: {
    icon: Code,
    items: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 90 },
      { name: 'UI/UX Optimization', level: 85 },
      { name: 'Tailwind CSS', level: 87 }
    ]
  },
  backend: {
    icon: Database,
    items: [
      { name: 'Java', level: 85 },
      { name: 'C#', level: 82 },
      { name: 'PHP', level: 78 },
      { name: 'SQL (MySQL, PostgreSQL)', level: 88 },
      { name: 'Supabase', level: 86 },
      { name: 'Firebase', level: 80 }
    ]
  },
  tools: {
    icon: Wrench,
    items: [
      { name: 'Git', level: 90 },
      { name: 'WordPress (Advanced)', level: 85 },
      { name: 'Unity', level: 75 },
      { name: 'Agile/Scrum', level: 88 },
      { name: 'Version Control', level: 92 }
    ]
  }
};

export const softSkills = [
  'AI Problem Solving',
  'Cross-cultural Communication',
  'Technical Mentoring',
  'Agile Leadership',
  'Data-driven Decision Making'
];
