import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech',
      school: 'RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya)',
      grade: 'In Progress',
      year: 'Ongoing',
      icon: '🎓',
      color: '#667eea'
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Model Higher Secondary School',
      grade: 'Grade: A+',
      year: '2023',
      icon: '📚',
      color: '#764ba2'
    },
    {
      degree: 'High School',
      school: 'Rose Mary Higher Secondary School',
      grade: 'Grade: A+',
      year: '2020',
      icon: '📖',
      color: '#f093fb'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
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
      className="section education-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Education
      </motion.h2>
      
      <motion.div 
        className="education-grid"
        variants={containerVariants}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="education-icon-wrapper">
              <div className="education-icon" style={{ background: edu.color }}>
                <span>{edu.icon}</span>
              </div>
              <div className="education-year" style={{ borderColor: edu.color }}>
                {edu.year}
              </div>
            </div>
            
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-school" style={{ color: edu.color }}>
                {edu.school}
              </div>
              <div className="education-grade">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>{edu.grade}</span>
              </div>
            </div>
            
            <div className="education-decoration" style={{ background: `linear-gradient(135deg, ${edu.color}, transparent)` }}></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
