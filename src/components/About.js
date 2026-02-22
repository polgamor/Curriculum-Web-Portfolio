import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useTranslation from '../hooks/useTranslation';
import { coreTechnologies } from '../data/about';
import { fadeUpContainer, fadeUpItem } from '../utils/animations';

const containerVariants = fadeUpContainer();
const itemVariants = fadeUpItem();

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 relative">
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
            {t('about.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-2xl" />
                <div className="relative glass rounded-full p-1">
                  <div className="bg-dark rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                    <img src="/Media/Perfil.JPG" alt="Pol García Moreno" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  variants={itemVariants}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">1</div>
                  <div className="text-gray-400">Year Experience</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="mb-2">
                    <div className="text-3xl font-bold gradient-text">AI/ML</div>
                  </div>
                  <div className="text-gray-400">Specialization</div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="text-xl font-semibold text-white mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {coreTechnologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
