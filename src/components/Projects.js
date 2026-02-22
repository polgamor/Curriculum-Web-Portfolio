import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import { projects } from '../data/projects';
import { fadeUpContainer, fadeUpItem } from '../utils/animations';

const containerVariants = fadeUpContainer();
const itemVariants = fadeUpItem(50);

const Projects = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            {t('projects.title')}
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="project-card group"
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🏝️</div>
                      <div className="text-gray-400">Malta Tourism App</div>
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-dark/80 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t(`projects.${project.key}.name`)}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      {t('projects.tech')}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {t(`projects.${project.key}.technologies`).split(', ').map((tech, i) => (
                        <span key={i} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center button-secondary text-sm py-2"
                    >
                      <Github size={16} className="inline mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center button-primary text-sm py-2"
                    >
                      <Play size={16} className="inline mr-2" />
                      {t('projects.view')}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
