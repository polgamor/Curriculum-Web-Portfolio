import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import { experiences } from '../data/experience';
import { fadeUpContainer, fadeLeftItem } from '../utils/animations';

const containerVariants = fadeUpContainer();
const itemVariants = fadeLeftItem();

const Experience = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
                      <h3 className="text-xl font-bold text-white mb-1">
                        {t(`experience.${exp.key}.position`)}
                      </h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <span className="font-medium">{t(`experience.${exp.key}.company`)}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {t(`experience.${exp.key}.period`)}
                      </div>
                      {exp.current && (
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {t('experience.current')}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{t(`experience.${exp.key}.description`)}</p>

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
