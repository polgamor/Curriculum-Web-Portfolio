import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import { contactDetails, socialLinks } from '../data/contact';

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-dark/50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">Pol García Moreno</h3>
            <p className="text-gray-400 text-sm mb-4">
              AI Engineer & Full Stack Developer specializing in intelligent solutions and innovative web development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, rotate: link.rotate }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">{t('contact.title')}</h4>
            <div className="space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <Icon size={16} />
                    <span>{item.value}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pol García Moreno. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with React, Framer Motion & Tailwind CSS
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            title="Back to top"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
