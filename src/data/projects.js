const projectsData = [
  {
    id: 1,
    title: "Explainable LSTM for Legal Sentiment Analysis",
    problem: 
      "The massive volume of legal documents (300k+ in 3 months) makes manual analysis of verdict trends difficult for practitioners.",
    solution: 
      "Engineered an NLP pipeline to clean and tokenize massive text datasets. Built an LSTM model integrated with LIME (Explainable AI) to highlight which keywords drove the model's prediction.",
      // "Built an LSTM model with NLP to extract legal narratives and predict prison sentence lengths, using Explainable AI for transparency.",
    impact: 
      "Reduced analysis time by 90% while ensuring transparency—a critical factor for safe and trusted AI adoption in sensitive sectors.",
      // "Enabled automated, interpretable analysis of sentencing trends from massive legal datasets.",
    technologies: ["Python", "TensorFlow", "NLP", "LIME"],
    tags: ["ml", "nlp", "xai"],
    githubUrl: "https://www.kaggle.com/code/zhulfa/explainable-lstm-of-indonesian-criminal-sentences",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Electric Demand Forecasting",
    problem:
      "Utility companies face significant losses due to inefficient energy distribution caused by inaccurate demand forecasting.",
    solution:
      "Developed a robust regression pipeline using CatBoost. Implemented advanced feature engineering on time-series data and optimized hyperparameters using Optuna.",
    impact: 
      "Achieved a validation RMSE of 37.41, providing high-precision forecasts that enable better resource allocation and operational cost reduction.",
    technologies: ["Python", "CatBoost", "Optuna"],
    tags: ["ml", "tsa", "viz", "reg"],
    githubUrl:
      "https://www.kaggle.com/code/zhulfa/electricity-consumption-prediction-with-catboost",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Bootcamp Early Warning System: Dropout Analysis",
    problem:
      "Bootcamps lose revenue when students drop out. Identifying 'at-risk' students early is difficult due to lack of labeled historical behavioral data.",
    solution:
      "Developed a predictive early-warning system that analyzes behavioral signals (attendance, submission rates) to classify students into risk categories without needing prior historical labels.",
    impact:
      "Achieved 82% Balanced Accuracy, demonstrating that clustering can effectively reconstruct missing labels for early dropout detection.",
    technologies: ["Python", "K-Means", "Unsupervised"],
    tags: ["ml", "ul", "class"],
    githubUrl: "https://github.com/ZulfahmiCP/minetoday-horizone",
    demoUrl: "#",
  },
  {
    id: 4,
   id: 4,
    title: "Behavioral Personality Classification",
    problem:
      "Understanding user personality traits (Introvert/Extrovert) is key for personalized recommendation engines and user experience optimization.",
    solution:
      "Built a high-performance XGBoost classifier. Focused on rigorous data validation and automated hyperparameter tuning to maximize generalization.",
    impact: 
      "Achieved 96.68% Accuracy, demonstrating the capability to model complex human behavioral patterns from raw data attributes.",
    technologies: ["Python", "XGBoost", "Optuna", "Data Cleaning"],
    tags: ["ml", "class"],
    githubUrl:
      "https://www.kaggle.com/code/zhulfa/predict-introverts-extroverts",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Data Science Portofolio Website",
    problem:
      "Traditional CVs fail to interactively demonstrate coding standards, design sense, and project depth to potential recruiters.",
    solution:
      "Architected a responsive Single Page Application (SPA) using React.js. Implemented modular component structure and clean CSS for a futuristic yet professional UI.",
    impact: 
      "Demonstrates Full-Stack capability (Frontend + Data), proving ability to not just build models, but also integrate them into production-ready interfaces.",
    technologies: ["React", "JavaScript", "CSS3", "Git"],
    tags: ["web"],
    githubUrl: "https://github.com/ZulfahmiCP/Portofolio-Website",
    demoUrl: "#",
  },
];

export default projectsData;
