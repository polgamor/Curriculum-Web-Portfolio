import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'polgarciamoreno392@gmail.com',
      href: 'mailto:polgarciamoreno392@gmail.com'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+34 633 297 540',
      href: 'tel:+34633297540'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Barcelona, Spain',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          >
            {t('contact.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.getInTouch')}</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div variants={itemVariants} className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">{t('contact.followMe')}</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/polgamor"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/pol-garcía-moreno-1ab3a9205"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    href="mailto:polgarciamoreno392@gmail.com"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Mail size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-dark rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 disabled:opacity-50"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.emailField')}
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 disabled:opacity-50"
                    placeholder={t('contact.emailPlaceholderField')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 resize-none disabled:opacity-50"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale: 1.05 } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.95 } : {}}
                  className="w-full button-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{t('contact.sendButton')}</span>
                    </>
                  )}
                </motion.button>

                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 text-sm"
                  >
                    <CheckCircle size={16} />
                    <span>{t('contact.success')}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    <span>{t('contact.error')}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
