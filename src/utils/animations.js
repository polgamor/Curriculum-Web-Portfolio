export const fadeUpContainer = (stagger = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: stagger
    }
  }
});

export const fadeUpItem = (y = 30, duration = 0.8) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.6, -0.05, 0.01, 0.9]
    }
  }
});

export const fadeLeftItem = (x = 50, duration = 0.8) => ({
  hidden: { opacity: 0, x: -x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: [0.6, -0.05, 0.01, 0.9]
    }
  }
});
