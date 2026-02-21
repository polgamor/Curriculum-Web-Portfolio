import React from 'react';
import { motion } from 'framer-motion';

const OrbitMenu = ({ items, radius, iconSize, photoSize, onItemClick, getLabel }) => {
  const containerSize = (radius + iconSize) * 2 + 20;

  return (
    <div className="orbit-menu" style={{ width: containerSize, height: containerSize }}>
      {/* Glow behind photo */}
      <div
        className="orbit-glow"
        style={{ width: photoSize * 1.2, height: photoSize * 1.2 }}
      />

      {/* Orbit ring */}
      <div
        className="orbit-ring"
        style={{ width: radius * 2 + iconSize, height: radius * 2 + iconSize }}
      />

      {/* Center photo */}
      <div
        className="orbit-photo"
        style={{ width: photoSize, height: photoSize }}
      >
        <img src="/Media/Perfil.JPG" alt="Pol García Moreno" />
      </div>

      {/* Orbit items */}
      {items.map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        const Icon = item.icon;

        return (
          /* Positioning wrapper — plain div, no framer-motion */
          <div
            key={item.id}
            className="orbit-node"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            {/* Animation wrapper — only handles opacity + scale */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.12, ease: 'backOut' }}
            >
              <button
                className="orbit-btn"
                onClick={() => onItemClick(item.id)}
              >
                <div
                  className="orbit-icon"
                  style={{
                    width: iconSize,
                    height: iconSize,
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  <Icon size={iconSize * 0.4} className="text-gray-300" />
                </div>
                <span className="orbit-label">{getLabel(item.id)}</span>
              </button>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default OrbitMenu;
