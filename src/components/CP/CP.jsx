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
      <div className="container cp-container">
        <h2 className="section-title">Competitive Programming</h2>
        <p>
          I am an active competitive programmer and have authored several problems for university-level 
          and online contests. Below is a selection of problems I've designed.
        </p>
        <button 
          onClick={toggleTable}
          className="btn btn-primary"
        >
          {showTable ? 'Hide Authored Problems' : 'Show Authored Problems'}
        </button>
        
        {showTable && (
          <div id="cp-table-container">
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
                        <td rowSpan={contest.problems.length}>{contest.name}</td>
                      )}
                      <td>
                        <a 
                          href={problem.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {problem.title}
                        </a>
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
    </section>
  );
};

export default CompetitiveProgramming;