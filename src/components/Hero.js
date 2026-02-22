import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, FolderOpen, Zap, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import OrbitMenu from './OrbitMenu';

const ORBIT_ITEMS = [
  { id: 'about',      icon: User,           angle: -90  },
  { id: 'experience', icon: Briefcase,      angle: -39  },
  { id: 'education',  icon: GraduationCap,  angle: 12   },
  { id: 'projects',   icon: FolderOpen,     angle: 63   },
  { id: 'skills',     icon: Zap,            angle: 114  },
  { id: 'contact',    icon: Mail,           angle: 165  },
  { id: 'chat',       icon: MessageCircle,  angle: 216  },
];

const Hero = () => {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: '#0E131F' }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4"
      >
        {/* ── FIRST VIEWPORT: Orbital photo + name + social ── */}
        <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 gap-4">
          {/* Orbital system: THE FIRST THING YOU SEE */}
          <motion.div variants={itemVariants}>
            <div className="hidden sm:block">
              <OrbitMenu
                items={ORBIT_ITEMS}
                radius={160}
                iconSize={46}
                photoSize={200}
                onItemClick={scrollTo}
                getLabel={(id) => t(`nav.${id}`)}
              />
            </div>
            <div className="block sm:hidden">
              <OrbitMenu
                items={ORBIT_ITEMS}
                radius={110}
                iconSize={34}
                photoSize={100}
                onItemClick={scrollTo}
                getLabel={(id) => t(`nav.${id}`)}
              />
            </div>
          </motion.div>

          {/* Name & title below orbital */}
          <div className="text-center">
            <motion.p variants={itemVariants} className="text-base md:text-lg font-light text-gray-400 mb-2 tracking-wide">
              {t('hero.greeting')}
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
              {t('hero.name')}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-4">
              {t('hero.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </motion.p>
          </div>

          {/* Buttons + Social links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
              onClick={() => scrollTo('contact')}
            >
              {t('hero.cta')}
            </motion.button>
            <motion.a
              href="/CV_Pol_García_Moreno_English.pdf"
              download
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary"
            >
              Download CV
            </motion.a>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/polgamor"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pol-garcía-moreno"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:polgarciamoreno392@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </motion.div>
      {/* Bottom separator */}
      <div className="relative z-10 border-b border-white/5" />
    </section>
  );
};

export default Hero;
