import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="section about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="section-title" variants={textVariants}>
        Professional Summary
      </motion.h2>
      <motion.div className="about-content" variants={textVariants}>
        <div className="about-card">
          <div className="about-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <p className="about-text">
            I am a <strong>Full Stack Developer</strong> with <strong>3 years of experience</strong> in web development. 
            I am highly experienced in creating various websites and templates for all types 
            of industries. I have successfully developed and delivered projects across diverse 
            sectors, combining technical expertise with creative design solutions.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
