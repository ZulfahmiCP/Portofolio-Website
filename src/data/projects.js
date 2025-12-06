const projectsData = [
  {
    id: 1,
    title: "Explainable LSTM of Indonesian Criminal Sentences",
    problem: 
      "The massive volume of legal documents (300k+ in 3 months) makes manual analysis of verdict trends difficult for practitioners.",
    solution: 
      "Built an LSTM model with NLP to extract legal narratives and predict prison sentence lengths, using Explainable AI for transparency.",
    impact: 
      "Enabled automated, interpretable analysis of sentencing trends from massive legal datasets.",
    technologies: ["Python", "TensorFlow", "LSTM", "Explainable AI"],
    tags: ["ml", "nlp", "xai"],
    githubUrl: "https://www.kaggle.com/code/zhulfa/explainable-lstm-of-indonesian-criminal-sentences",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Electric Demand Forecasting with CatBoost & Optuna",
    problem:
      "Addressed the critical business need for accurate electricity demand forecasting.",
    solution:
      "Developed a CatBoost model with advanced feature engineering and Optuna hyperparameter tuning.",
    impact: "The model achieved a validation RMSE of 37.41.",
    technologies: ["Python", "CatBoost", "Optuna"],
    tags: ["ml", "tsa", "viz", "reg"],
    githubUrl:
      "https://www.kaggle.com/code/zhulfa/electricity-consumption-prediction-with-catboost",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Bootcamp Dropout Analysis & Success Prediction using K-Means Clustering",
    problem:
      "High participant dropout rates create resource inefficiencies for bootcamp organizers, who need to identify at-risk students early to intervene.",
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
    title: "Introvert/Extrovert Classification with XGBoost",
    problem:
      "To predict a person's personality type (Introvert/Extrovert) based on behavioral data.",
    solution:
      "An XGBoost model was built with hyperparameters tuned using Optuna for accuracy.",
    impact: "Achieved a final Accuracy Score of 96.68%.",
    technologies: ["Python", "XGBoost", "Optuna"],
    tags: ["ml", "class"],
    githubUrl:
      "https://www.kaggle.com/code/zhulfa/predict-introverts-extroverts",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Portofolio Website",
    problem:
      "A responsive and modern single-page application (SPA) built with React.js to serve as my professional online presence. This portfolio dynamically showcases my projects, skills, and technical journey in an organized and visually appealing manner.",
    solution: "",
    impact: "",
    technologies: ["React", "JavaScript", "CSS"],
    tags: ["web"],
    githubUrl: "https://github.com/ZulfahmiCP/Portofolio-Website",
    demoUrl: "#",
  },
];

export default projectsData;
