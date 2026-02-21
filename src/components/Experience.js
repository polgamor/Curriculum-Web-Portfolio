import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const Experience = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: t('experience.geosys.position'),
      company: t('experience.geosys.company'),
      location: 'Malta',
      duration: t('experience.geosys.period'),
      current: false,
      description: t('experience.geosys.description'),
      achievements: [
        'Developed cross-platform tourism app with Flutter & Dart',
        'Optimized data retrieval with Supabase integration',
        'Collaborated in international Big Data environment',
        'Improved app responsiveness and user experience'
      ]
    },
    {
      title: t('experience.timtul.position'),
      company: t('experience.timtul.company'),
      location: 'Spain',
      duration: t('experience.timtul.period'),
      current: false,
      description: t('experience.timtul.description'),
      achievements: [
        'Reduced frontend bugs by 15% through rigorous testing',
        'Developed responsive UI components for proprietary CMS',
        'Applied Agile/Scrum methodologies effectively',
        'Delivered modular, maintainable code solutions'
      ]
    },
    {
      title: t('experience.lambea.position'),
      company: t('experience.lambea.company'),
      location: 'Spain',
      duration: t('experience.lambea.period'),
      current: false,
      description: t('experience.lambea.description'),
      achievements: [
        'Managed e-commerce workflows efficiently',
        'Optimized Amazon Marketplace listings',
        'Improved customer service response times',
        'Automated catalog management processes'
      ]
    },
    {
      title: t('experience.tutoring.position'),
      company: t('experience.tutoring.company'),
      location: 'Barcelona',
      duration: t('experience.tutoring.period'),
      current: true,
      description: t('experience.tutoring.description'),
      achievements: [
        'Mentoring students in Systems and Networks (SMX)',
        'Simplifying complex algorithmic concepts',
        'Creating practical learning modules',
        'Bridging theory with real-world applications'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            {t('experience.title')}
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >

                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-dark rounded-xl p-6 ml-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <span className="font-medium">{exp.company}</span>
                        {exp.company && <span className="mx-2">•</span>}
                        <div className="flex items-center text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                      {exp.current && (
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {t('experience.current')}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        <span className="text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;