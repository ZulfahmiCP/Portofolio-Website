import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { ChevronDown, ChevronUp, ExternalLink, Trophy } from 'lucide-react'; 
import cpProblems from '../../data/cpProblems';
import '../../styles/components/cp.css';

const CompetitiveProgramming = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <section id="cp">
      <div className="container"> 
        <div className="cp-container">
          
          <div className="cp-content">
            {/* Judul dengan Animasi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Competitive Programming</h2>
              <p className="cp-description">
                As an active competitive programmer, I have a deep passion for algorithmic problem-solving. 
                This passion extends to authoring challenging and creative problems for university-level contests. 
                Below is a curated selection of problems I've designed.
              </p>
            </motion.div>

            <motion.button 
              onClick={() => setShowTable(!showTable)} 
              className="button-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {showTable ? (
                <>
                  <ChevronUp size={20} /> Hide Authored Problems
                </>
              ) : (
                <>
                  <ChevronDown size={20} /> Show Authored Problems
                </>
              )}
            </motion.button>
            
            <AnimatePresence>
              {showTable && (
                <motion.div 
                  className="cp-table-container"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 30 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ overflow: 'hidden' }} 
                >
                  <table className="cp-table">
                    <thead>
                      <tr>
                        <th>Contest</th>
                        <th>Problem</th>
                        <th>Tags</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cpProblems.map((contest, index) => (
                        contest.problems.map((problem, pIndex) => (
                          <tr key={`${index}-${pIndex}`}>
                            {pIndex === 0 && (
                              <td rowSpan={contest.problems.length} data-label="Contest">
                                <a 
                                  href={contest.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="cp-link"
                                  style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                >
                                  {contest.name}
                                </a>
                              </td>
                            )}
                            <td data-label="Problem">
                              <a 
                                href={problem.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cp-link"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                {problem.title} 
                              </a>
                            </td>
                            <td data-label="Tags">
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                {problem.tags.map((tag, tIndex) => (
                                  <span key={tIndex} className="tag">{tag}</span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;