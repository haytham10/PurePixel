export const stagger = {
	initial: {},
	animate: {
	  transition: {
		staggerChildren: 0.1
	  }
	}
  }
  
  export const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: {
	  opacity: 1,
	  y: 0,
	  transition: {
		duration: 0.5,
		ease: "easeOut"
	  }
	}
  }
  
  export const scaleIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: {
	  opacity: 1,
	  scale: 1,
	  transition: {
		duration: 0.5,
		ease: "easeOut"
	  }
	}
  }
  
  export const floatAnimation = {
	initial: { y: 0 },
	animate: {
	  y: [-10, 10, -10],
	  transition: {
		duration: 6,
		repeat: Infinity,
		ease: "easeInOut"
	  }
	}
  }
  
  export const pulseAnimation = {
	initial: { scale: 1 },
	animate: {
	  scale: [1, 1.05, 1],
	  transition: {
		duration: 4,
		repeat: Infinity,
		ease: "easeInOut"
	  }
	}
  }