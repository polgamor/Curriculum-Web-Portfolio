import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const languages = {
  en: { name: 'English', abbr: 'EN' },
  es: { name: 'Español', abbr: 'ES' },
  ca: { name: 'Català', abbr: 'CA' }
};

const FlagSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useTranslation();

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.flag-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flag-selector relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 glass px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <span className="text-sm font-bold">{languages[language].abbr}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full mt-2 right-0 glass-dark rounded-2xl p-2 min-w-[140px] shadow-xl border border-white/10"
          >
            {Object.entries(languages).map(([lang, config]) => (
              <motion.button
                key={lang}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-2 rounded-xl transition-all duration-200 ${
                  language === lang 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-white/10 text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-sm font-bold w-6 text-center">{config.abbr}</span>
                <span className="text-sm font-medium">{config.name}</span>
                {language === lang && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-primary rounded-full ml-auto"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlagSelector;