import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    name: 'CAMELS Australia Hydrology Dashboard',
    description: 'This dashboard brings together Australia’s largest network of gauged catchments to let you explore historical streamflow, hydrometeorology, landscape attributes, and soil properties all in one place. From plotting decades of monthly flows and ARIMA forecasts (with built-in trend testing) to inspecting catchment geology/soil textures via boxplots, scatterplots, PCA biplots, and cluster/heatmap analyses—every tool is designed to help you uncover patterns, group similar catchments, spot outliers, and feed those insights back into hydrological models or infrastructure planning. Whether you’re studying extreme precipitation events, seasonal water availability, or regional soil influences, this interactive platform makes it easy to visualize, compare, and interpret key hydrological and environmental signals for better water-resource management and prediction across Australia.',
    websiteLink: '',
    GitHubLink:'https://github.com/Kumareshan30/Hydrology_Dashboard',
    tech: ["NextJS", "React", "TypeScript", "Python", "ARIMA Timeseries Forecasting","Geo-Spatial Analysis","Principal Component Analysis","Mann-Kendall Testing", "Plotly", "Tailwind","FastAPI", "pandas", "Docker"]
  },
  {
    name: 'Custom KNN Regression and K-Fold CV',
    description: 'The KNN Regression Dashboard provides an end‐to‐end interactive exploration of k-nearest-neighbors regression and its sensitivity to the choice of k. After loading a synthetic dataset, it lets you visualize feature and target distributions, perform k-fold cross-validation to compare training vs. test errors across different k values (complete with confidence intervals), and automatically select the optimal k. You can then interactively choose k to see how your predictions change, examine residuals and bias–variance trade‐offs, inspect model performance via partial dependence plots, and gain intuitive insight into how neighborhood size governs under- and overfitting. This hands‐on tool helps you understand both the mechanics and the practical impacts of model complexity in KNN regression.',
    websiteLink: 'https://custom-knn-regression-with-kfoldcv.streamlit.app/',
    GitHubLink:'https://github.com/Kumareshan30/Diabetes-Dataset-Analysis-using-KNN-Regression-and-KFoldCV',
    tech: ["Python", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization", "Machine Learning", "Statistical Analysis", "Data Wrangling","Hyperparameter Tuning", "Cross Validation", "Model Selection Automation", "Supervised Models", "Custom Algorithm Implementation"]
  },
  {
    name: '2D Map Generating Autonomous Rover',
    description: 'SLAM LIDAR mapping displayed via React.js on Heroku; Python-based controls on Raspberry Pi',
    tech: ['SLAM', 'LIDAR', 'React.js', 'Python']
  },
  {
    name: 'Ridge Regression and Regularization using Synthetic Data',
    description: 'The Ridge Regression Visualization is an interactive Streamlit app that illustrates how L2 regularization shapes polynomial regression on a controlled synthetic dataset. It begins by generating noisy observations from a cosine‐based function, then expands the input via user‐specified polynomial features and fits a custom gradient‐descent–driven Ridge model. Through adjustable sliders, you can alter sample size, noise level, train/test split, learning rate, polynomial degree, and the regularization parameter λ. The app dynamically displays feature and target histograms, overlays the fitted regression curve on the data, plots training versus testing mean squared error against log λ (revealing under‐ and overfitting regions), and provides partial‐dependence curves to show how predictions vary with the input. By exploring these elements, users gain an intuitive understanding of the bias–variance trade-off and the critical role of regularization in preventing model overcomplexity.',
    websiteLink: 'https://ridge-regression-and-regularization-using-synthetic-data.streamlit.app/',
    GitHubLink:'https://github.com/Kumareshan30/Ridge-Regression-and-Regularization-using-Synthetic-Data',
    tech: ["Python", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization", "Machine Learning", "Statistical Analysis", "Data Wrangling","Hyperparameter Tuning", "Cross Validation", "Regularization & Model Selection", "Supervised Models"]
  },
  {
    name: 'Loan Default Prediction System',
    description: 'Big Data analysis and real-time streaming using Apache PySpark, Hadoop, and Kafka',
    tech: ['PySpark', 'Hadoop', 'Kafka']
  },
  {
    name: 'Real Madrid vs Barcelona Analysis Dashboard',
    description: 'Interactive dashboard with statistical analysis and visualizations using D3.js and R Shiny',
    tech: ['D3.js', 'R Shiny', 'JavaScript', 'R', 'StatsbombR', 'Plotly']
  },
  {
    name: 'Bayes Classifier vs Logistic Regression using Cancer Dataset',
    description: 'The “Logistic vs. Bayesian Classifiers” dashboard provides an interactive, end-to-end comparison of probabilistic and discriminative models on the UCI breast cancer dataset. Users can select among Naive Bayes (shared and unshared covariance), full-covariance Bayes, and a custom SGD-regularized logistic regression, adjust the train/test split, and instantly view performance metrics—accuracy, 0/1 loss, confusion matrices, and classification reports—alongside visual diagnostics like ROC, precision-recall, and calibration curves. Interactive feature distribution plots and partial-dependence curves further illuminate how individual predictors influence the estimated cancer probability, while comprehensive scenario-based guidance helps choose the best model for different data regimes and risk-sensitivity requirements.',
    websiteLink: 'https://bayes-models-comparison.streamlit.app/',
    GitHubLink:'https://github.com/Kumareshan30/Cancer-Dataset-Analysis-using-Logistic-Regression-and-Bayes-Classifier',
    tech: ["Python", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization", "Machine Learning", "Statistical Analysis", "Probability & Bayesian Inference","Model Evaluation Metrics", "Cross Validation", "Supervised Models"]
  },
  {
    name: 'Football Analytics & Predictions Website',
    description: 'Built with React TypeScript frontend and Python Flask backend; includes Random Forest models',
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'Random Forest', "Exploratory Data Analysis", "Feature Engineering", 'Machine Learning']
  }
];

export function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <h3 className="text-4xl font-semibold text-primary mb-8">Projects</h3>
      <Slider {...settings} className="-mx-4">
        {projects.map((proj) => (
          <div key={proj.name} className="px-4">
            <ProjectCard {...proj} />
          </div>
        ))}
      </Slider>
    </section>
  );
}