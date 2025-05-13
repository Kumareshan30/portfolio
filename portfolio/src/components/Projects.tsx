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
    description: 'I architected and built a fully autonomous rover that navigates and maps unknown indoor environments using 2D LIDAR–based SLAM. Onboard, a ROS-inspired Python stack ingests real-time laser scans, performs scan-matching and pose estimation, and incrementally builds an occupancy‐grid map via a particle-filter SLAM algorithm. A PID–driven control loop steers the differential–drive platform around obstacles, while a lightweight WebSocket bridge streams live map and pose updates to a Node.js service. The front-end—built in React.js and hosted on Heroku—renders an interactive 2D map, live telemetry, and path‐planning overlays, enabling remote monitoring and teleoperation. Throughout the project I set up Dockerized CI/CD on GitHub Actions, managed sensor calibration, optimized Python for real-time performance, and ensured robust error handling and reconnection logic for seamless web visualization.',
    tech: ['SLAM', 'LIDAR', 'React.js', 'Python', 'Robotics', 'SLAM', 'Deployment and CI/CD', 'RaspberryPi', '']
  },
  {
    name: 'Loan Default Prediction System',
    description: 'This end-to-end web application unifies data ingestion, transformation, modeling, and customer segmentation for loan‐application analytics. It begins by loading four raw CSV tables—applications, previous applications, defaults, and a value dictionary—while normalizing column names and caching the data for responsiveness. Nine engineered features (loan-to-income ratio, age buckets, aggregate past-credit exposure, credit-worthiness tiers, etc.) are computed on demand, each accompanied by a clear rationale. Users explore default-rate balances and feature distributions through dynamic count and histogram charts. In the modeling section, they select from Random Forest and Gradient-Boosting classifiers and choose which engineered features to include; performance metrics (accuracy, precision, recall, ROC AUC) and confusion matrices update instantly. Finally, the app provides K-Means–based customer segmentation—letting users specify cluster counts and feature sets—and visualizes the resulting segments with silhouette scoring and 2D scatter plots. This comprehensive dashboard streamlines the path from raw big-data tables to actionable risk insights and customer clusters, all within an intuitive browser-based interface.',
    GitHubLink:'https://github.com/Kumareshan30/Loan-Application-Big-Data-Project',
    tech: ['PySpark', 'Hadoop', 'Kafka', 'SparkSQL', 'Spark ML', 'Exploratory Data Analysis', 'Data Engineering', 'Feature Engineering', 'Statistical Analysis', 'Machine Learning']
  },
  {
    name: 'Ridge Regression and Regularization using Synthetic Data',
    description: 'The Ridge Regression Visualization is an interactive Streamlit app that illustrates how L2 regularization shapes polynomial regression on a controlled synthetic dataset. It begins by generating noisy observations from a cosine‐based function, then expands the input via user‐specified polynomial features and fits a custom gradient‐descent–driven Ridge model. Through adjustable sliders, you can alter sample size, noise level, train/test split, learning rate, polynomial degree, and the regularization parameter λ. The app dynamically displays feature and target histograms, overlays the fitted regression curve on the data, plots training versus testing mean squared error against log λ (revealing under‐ and overfitting regions), and provides partial‐dependence curves to show how predictions vary with the input. By exploring these elements, users gain an intuitive understanding of the bias–variance trade-off and the critical role of regularization in preventing model overcomplexity.',
    websiteLink: 'https://ridge-regression-and-regularization-using-synthetic-data.streamlit.app/',
    GitHubLink:'https://github.com/Kumareshan30/Ridge-Regression-and-Regularization-using-Synthetic-Data',
    tech: ["Python", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization", "Machine Learning", "Statistical Analysis", "Data Wrangling","Hyperparameter Tuning", "Cross Validation", "Regularization & Model Selection", "Supervised Models"]
  },
  {
    name: 'Yarra Trees Interactive Dashboard (R Shiny)',
    description: 'This Shiny application provides an interactive exploration of urban forestry in the City of Yarra. By combining a Leaflet‐powered map with adjustable DBH (diameter at breast height) and height sliders, users can immediately see where trees of certain sizes are located and click any marker to get species, genus, age, height and DBH details. Side‐by‐side ggplot2 visualizations then reveal how DBH correlates with height across genera (scatter plot) and compare height distributions by genus (boxplots). Altogether, it demonstrates how reactive filtering, spatial mapping and linked statistical plots can turn a raw CSV of tree census data into a rich, web‐accessible dashboard for urban ecologists, city planners or curious citizens.',
    GitHubLink:'https://github.com/Kumareshan30/Yarra-Trees-RShiny-Project',
    tech: ['R', 'Shiny', 'Leaflet', 'GGplot2', 'Spatial Data Visualization', 'Exploratory Data Analysis', 'Data Engineering', 'Feature Engineering', 'Statistical Analysis']
  },
  {
    name: 'Urban Tree Data Visualization (Tableau)',
    description: 'This Tableau workbook delivers a rich, interactive exploration of urban forestry across Melbourne. By leveraging maps, time-series charts, and dynamic filters, users can uncover spatial patterns of tree species, track planting trends over decades, and examine how different genera occupy parks, streets, and other urban spaces. Built entirely in Tableau Public/Desktop, the dashboards synthesize raw CSV records—complete with planting dates, taxonomic details, and geolocation—into intuitive visual narratives that support data-driven urban planning and conservation decisions.',
    GitHubLink:'https://github.com/Kumareshan30/Urban-Trees-Tableau-Visualization',
    tech: ['R', 'Shiny', 'Leaflet', 'GGplot2', 'Spatial Data Visualization', 'Exploratory Data Analysis', 'Data Engineering', 'Feature Engineering', 'Statistical Analysis']
  },
  {
    name: 'Bayes Classifier vs Logistic Regression using Cancer Dataset',
    description: 'The Logistic vs Bayesian Classifiers dashboard provides an interactive, end-to-end comparison of probabilistic and discriminative models on the UCI breast cancer dataset. Users can select among Naive Bayes (shared and unshared covariance), full-covariance Bayes, and a custom SGD-regularized logistic regression, adjust the train/test split, and instantly view performance metrics—accuracy, 0/1 loss, confusion matrices, and classification reports—alongside visual diagnostics like ROC, precision-recall, and calibration curves. Interactive feature distribution plots and partial-dependence curves further illuminate how individual predictors influence the estimated cancer probability, while comprehensive scenario-based guidance helps choose the best model for different data regimes and risk-sensitivity requirements.',
    websiteLink: 'https://bayes-models-comparison.streamlit.app/',
    GitHubLink:'https://github.com/Kumareshan30/Cancer-Dataset-Analysis-using-Logistic-Regression-and-Bayes-Classifier',
    tech: ["Python", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization", "Machine Learning", "Statistical Analysis", "Probability & Bayesian Inference","Model Evaluation Metrics", "Cross Validation", "Supervised Models"]
  },
  {
    name: 'E-Commerce Data Analysis with PySpark RDDs, DataFrames & SQL',
    description: 'This project harnesses Apache Spark to explore and model large-scale e-commerce transaction logs, comparing three core Spark abstractions—RDDs, DataFrames, and SQL—to understand their relative performance and expressiveness. Starting with raw order records (including amounts, payment methods, and approval statuses), we perform end-to-end data cleaning, feature engineering, and exploratory analyses to surface customer purchasing patterns, seasonal trends, and payment behavior. We then benchmark identical queries—such as total approved volume by month, income distributions by customer segment, and credit request flags—across RDD transformations, the DataFrame API, and Spark SQL, measuring execution times and resource use. Finally, we translate these insights into actionable business recommendations around credit policies, targeted marketing, and fraud detection.',
    GitHubLink:'https://github.com/Kumareshan30/E-Commerce-Data-Analysis-using-RDD-Dataframes-PySpark',
    tech: ['Apache Spark', 'PySpark', "Exploratory Data Analysis", 'Data Engineering', 'Feature Engineering', 'Statistical Analysis', 'Big Data Engineering']
  },
  {
    name: 'Interactive Football Analytics Dashboard (2015–16 Barça vs. Real Madrid)',
    description: 'I built a dynamic web dashboard that brings the 2015–16 attacking battle between Barcelona’s “MSN” and Real Madrid’s “BBC” to life through rich, interactive visualizations powered by R Shiny and custom D3.js components. Behind the scenes, event- and tracking-level data (xG, xA, shot locations, pass endpoints, player positions) is ingested via the StatsBombR API and wrangled with tidyverse. Core plots—average position maps, shot/pass heatmaps, stacked xG + xA bar charts, detailed pass‐ and shot‐maps—were crafted in ggplot2 and converted to interactive Plotly overlays or D3.js SVGs for pan/zoom, tooltips, and real-time filtering. Users can toggle between team and player views, select individual attackers, and drill down on metrics like non-penalty xG/min or pass-into-box counts. The result is a seamless dashboard that conveys not only who scored and assisted, but how and where the two greatest front‐threes of that season operated on the pitch.',
    tech: ['D3.js', 'R Shiny', 'JavaScript', 'R', 'StatsbombR', 'Plotly', 'Spatial Analysis', 'Statistical Analysis','Data Wrangling','Exploratory Data Analysis','']
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