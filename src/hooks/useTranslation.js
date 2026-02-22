import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

export default useTranslation;
