import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Teacher',
      company: 'CADD-Center',
      period: '2019 - 2021',
      description: 'Developed project ideas and plans in conjunction with the web development team. Utilized social media tools and strategies to train new students on becoming full stack developers. Mentored and guided aspiring developers through comprehensive training programs.',
      icon: '🎓',
      color: '#667eea'
    },
    {
      title: 'Customer Service Executive',
      company: 'Zepto',
      period: '8-Month Contract',
      description: 'Worked on an 8-month contractual basis providing excellent customer service, handling customer inquiries, and ensuring customer satisfaction through effective communication and problem-solving.',
      icon: '💼',
      color: '#764ba2'
    },
    {
      title: 'Customer Service Executive',
      company: 'Amazon',
      period: '3-Month Contract',
      description: 'Worked on a 3-month contractual basis providing customer support and representing the company with professionalism. Developed strong communication skills and product knowledge.',
      icon: '📦',
      color: '#f093fb'
    },
    {
      title: 'Telecaller / CSE',
      company: 'Flipkart',
      period: '3-Month Contract',
      description: 'Worked as a Confident Telemarketer with expert communication skills and flexibility to handle diverse customers. Demonstrated strong product knowledge and represented the company professionally in all customer interactions.',
      icon: '📞',
      color: '#4facfe'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="section experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Professional Experience
      </motion.h2>
      
      <motion.div 
        className="experience-timeline"
        variants={containerVariants}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="experience-icon" style={{ background: exp.color }}>
              <span>{exp.icon}</span>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company" style={{ color: exp.color }}>
                    {exp.company}
                  </div>
                </div>
                <div className="experience-period">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
            <div className="experience-line"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
