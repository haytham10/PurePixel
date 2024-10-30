export const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { 
	  opacity: 1, 
	  y: 0, 
	  transition: { duration: 0.5 }
	}
  }
  
  export const stagger = {
	animate: {
	  transition: {
		staggerChildren: 0.1
	  }
	}
  }
  
  export const slideIn = {
	left: {
	  initial: { opacity: 0, x: -20 },
	  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
	},
	right: {
	  initial: { opacity: 0, x: 20 },
	  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
	}
  }