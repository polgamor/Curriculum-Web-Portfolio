import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import { educationItems } from '../data/education';
import { fadeUpContainer, fadeLeftItem } from '../utils/animations';

const containerVariants = fadeUpContainer();
const itemVariants = fadeLeftItem();

const Education = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="education" className="py-20 relative">
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
            {t('education.title')}
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

            {educationItems.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-dark rounded-xl p-6 ml-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={20} className="text-primary" />
                        <h3 className="text-xl font-bold text-white">
                          {t(`education.${edu.key}.degree`)}
                        </h3>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="font-medium">{t(`education.${edu.key}.school`)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {t(`education.${edu.key}.period`)}
                      </div>
                      {edu.current && (
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {t('experience.current')}
                        </span>
                      )}
                    </div>
                  </div>

                  {t(`education.${edu.key}.description`) && (
                    <p className="text-gray-300">{t(`education.${edu.key}.description`)}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
