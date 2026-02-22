import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const ChatSection = () => {
  const { t } = useTranslation();
  const [showFloating, setShowFloating] = useState(false);

  // Floating input: visible when hero input is off-screen AND chat section not yet reached
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const chatSection = document.getElementById('chat');
      if (!heroSection || !chatSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const chatRect = chatSection.getBoundingClientRect();

      const heroGone = heroRect.bottom < 0;
      const chatNotReached = chatRect.top > window.innerHeight * 0.85;

      setShowFloating(heroGone && chatNotReached);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChat = () => {
    document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Floating Button (like ChatGPT/Gemini) ── */}
      <motion.button
        className={`floating-chat-btn ${showFloating ? 'visible-float' : 'hidden-float'}`}
        onClick={scrollToChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot size={24} />
      </motion.button>

      {/* ── Chat Section: 100vh, no title ── */}
      <section id="chat" className="relative w-full" style={{ height: 'calc(100vh - 72px)' }}>
        <div className="h-full flex flex-col">
          {/* Top separator */}
          <div className="border-b border-white/5" />
          {/* Header bar */}
          <div className="chat-header flex-shrink-0 border-b border-white/5 bg-black/20">
            <div className="section-container flex items-center gap-3 py-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{t('chat.title')}</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-gray-500">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages area (fills remaining space) */}
          <div className="flex-1 overflow-y-auto">
            <div className="section-container max-w-3xl py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-1">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="chat-bubble-ai">
                    <p>{t('chat.welcome')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sticky input at bottom */}
          <div className="flex-shrink-0">
            <div className="section-container max-w-3xl py-4">
              <div className="chat-input-bar">
                <input
                  type="text"
                  className="chat-input-field"
                  placeholder={t('chat.placeholder')}
                  disabled
                />
                <button className="chat-send-btn" disabled>
                  <Send size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-600 text-center mt-2">
                AI model coming soon
              </p>
            </div>
          </div>
          {/* Bottom border to separate from next section */}
          <div className="border-b border-white/5" />
        </div>
      </section>
    </>
  );
};

export default ChatSection;
