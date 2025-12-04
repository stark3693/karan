import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  const skills = ['HTML', 'CSS', 'WordPress', 'Django'];
  const achievements = ['Best Modern Website Design', 'Best Teaching Experience'];
  
  const personalDetails = [
    { label: 'Address', value: 'Vallabh Bhawan, Arera Hills, Bhopal', icon: 'location' },
    { label: 'Languages', value: 'English, Hindi', icon: 'language' },
    { label: 'Nationality', value: 'Indian', icon: 'flag' },
    { label: 'Gender', value: 'Male', icon: 'user' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'location':
        return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
      case 'language':
        return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
      case 'flag':
        return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>;
      case 'user':
        return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
      default:
        return null;
    }
  };

  return (
    <motion.aside 
      className="sidebar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Personal Details */}
      <motion.div className="sidebar-section" variants={itemVariants}>
        <h2 className="sidebar-title">Personal Details</h2>
        <div className="personal-details">
          {personalDetails.map((detail, index) => (
            <motion.div 
              key={index} 
              className="detail-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="detail-icon">
                {getIcon(detail.icon)}
              </div>
              <div className="detail-content">
                <span className="detail-label">{detail.label}</span>
                <span className="detail-value">{detail.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div className="sidebar-section" variants={itemVariants}>
        <h2 className="sidebar-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-badge"
              variants={skillVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="skill-icon">⚡</span>
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div className="sidebar-section" variants={itemVariants}>
        <h2 className="sidebar-title">Achievements</h2>
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="achievement-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
