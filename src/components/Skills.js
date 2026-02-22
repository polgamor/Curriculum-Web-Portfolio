import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useTranslation from '../hooks/useTranslation';
import { skillCategories, softSkills } from '../data/skills';
import { fadeUpContainer, fadeUpItem, fadeLeftItem } from '../utils/animations';

const containerVariants = fadeUpContainer(0.1);
const categoryVariants = fadeUpItem();
const skillVariants = fadeLeftItem(20, 0.5);

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
            {Object.entries(skillCategories).map(([category, data], categoryIndex) => {
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
              {softSkills.map((softSkill) => (
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
