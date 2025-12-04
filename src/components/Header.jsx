import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.header 
      className="header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="header-background">
        <div className="animated-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </motion.div>

      <div className="header-content">
        <motion.h1 
          className="name"
          variants={itemVariants}
        >
          KARAN PATEL
        </motion.h1>
        
        <motion.div 
          className="title"
          variants={itemVariants}
        >
          <span className="gradient-text">Web Designer</span>
          <span className="separator">•</span>
          <span className="gradient-text">Full Stack Developer</span>
        </motion.div>
        
        <motion.div 
          className="contact-info"
          variants={itemVariants}
        >
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>6265610051</span>
          </div>
          
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Karanpatel2832005@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
