import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            {t('skills.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], categoryIndex) => {
              const Icon = data.icon;
              return (
                <motion.div
                  key={category}
                  variants={categoryVariants}
                  whileHover={{ y: -5 }}
                  className="glass-dark rounded-2xl p-8 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center text-white mb-6">
                    {t(`skills.categories.${category}`)}
                  </h3>

                  <div className="space-y-4">
                    {data.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        className="group/item"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: [0.6, -0.05, 0.01, 0.9]
                            }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-6 pt-6 border-t border-white/10 text-center opacity-0 transition-opacity duration-300"
                  >
                    <span className="text-sm text-gray-400">
                      {data.items.length} {t('skills.categories.' + category).toLowerCase()}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={categoryVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {['AI Problem Solving', 'Cross-cultural Communication', 'Technical Mentoring', 'Agile Leadership', 'Data-driven Decision Making'].map((softSkill) => (
                <span key={softSkill} className="skill-tag">
                  {softSkill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;