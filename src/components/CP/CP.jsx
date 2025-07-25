import React, { useState, useEffect } from 'react';
import './CompetitiveProgramming.css';

const CompetitiveProgramming = () => {
  const [showTable, setShowTable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cpProblems = [
    {
      contest: 'UniContest 2024',
      problems: [
        {
          title: 'Graph Traversal Mania',
          link: '#',
          tags: ['Graphs', 'DFS', 'BFS']
        },
        // Add other problems similarly
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cp');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="cp" 
      className={`scroll-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container cp-container">
        <h2 className="section-title">Competitive Programming</h2>
        <p>
          I am an active competitive programmer and have authored several problems 
          for university-level and online contests. Below is a selection of problems I've designed.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => setShowTable(!showTable)}
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
                        <td rowSpan={contest.problems.length}>{contest.contest}</td>
                      )}
                      <td>
                        <a href={problem.link} target="_blank" rel="noopener noreferrer">
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