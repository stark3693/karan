import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <motion.div 
        className="resume-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />
        
        <div className="content">
          <Sidebar />
          
          <main className="main-section">
            <About />
            <Experience />
            <Education />
          </main>
        </div>
        
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
