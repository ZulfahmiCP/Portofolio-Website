import { useState } from 'react';
import cpProblems from '../../data/cpProblems';
import '../../styles/components/cp.css';

const CompetitiveProgramming = () => {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <section id="cp" className="scroll-section">
      <div className="cp-container">
        <div className="cp-content">
          <h2 className="section-title">Competitive Programming</h2>
          <p className="cp-description">
            I am an active competitive programmer and have authored several problems for university-level and online contests. Below is a selection of problems I've designed.
          </p>
          <button 
            onClick={() => setShowTable(!showTable)} 
            className="cp-toggle-button"
          >
            {showTable ? 'Hide Authored Problems' : 'Show Authored Problems'}
          </button>
          
          {showTable && (
            <div className="cp-table-container">
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
                          <a href={contest.link} className="cp-link">{contest.name}</a>
                        </td>
                      )}
                      <td>
                        <a href={problem.link} className="cp-link">{problem.title}</a>
                      </td>
                      <td>
                        {problem.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="tag">{tag}</span>
                        ))}
                      </td>
                    </tr>
                  ))
                ))}
              </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;