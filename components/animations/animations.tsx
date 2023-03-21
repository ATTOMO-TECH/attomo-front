const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0.1,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const servicesAnimations = {
  hidden: { y: 200, opacity: 0.1 },
  show: { y: 0, opacity: 1 },
};

export const portfolioAnimation = {
  hidden: { scale: 0, opacity: 0.1 },
  show: { scale: 1, opacity: 1 },
};

export const milestoneAnimations = {
  hidden: { scale: 0, opacity: 0.1 },
  show: { scale: 1, opacity: 1 },
};

export const blogsAnimations = {
  hidden: { y: 200, opacity: 0.1 },
  show: { y: 0, opacity: 1 },
};

export const videoAnimations = {
  hidden: { scale: 0, opacity: 0.1 },
  show: { scale: 1, opacity: 1 },
};

export const pricingAnimations = {
  hidden: { y: 200, opacity: 0.1 },
  show: { y: 0, opacity: 1 },
};

export const testimonialsAnimation = {
  hidden: { scale: 0, opacity: 0.1 },
  show: { scale: 1, opacity: 1 },
};

export const skillsBarAnimations = {
  hidden: { y: 0, opacity: 0.1 },
  show: { y: 1, opacity: 1 },
};

export const contactAnimations = {
  hidden: { y: 200, opacity: 0.1 },
  show: { y: 0, opacity: 1 },
};

export const footerTextAnimations = {
  hidden: { x: -200, opacity: 0.1 },
  show: { x: 1, opacity: 1 },
};

export const footerLogoAnimations = {
  hidden: { scale: 0, opacity: 0.1 },
  show: { scale: 1, opacity: 1 },
};
