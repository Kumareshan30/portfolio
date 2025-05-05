import { useState } from 'react';
import clsx from 'clsx';

interface Skill {
  name: string;
  logo: string; // path to logo image in public/logos/
  description: string;
  usedIn: string[]; // projects or experiences
}

const skills: Skill[] = [
    { name: 'AWS', logo: '/logos/aws.png', description: 'Experience deploying and managing cloud infrastructure using AWS services.', usedIn: ['Cloud data pipelines at Deloitte'] },
    { name: 'Azure', logo: '/logos/azure.png', description: 'Skilled in Azure DevOps and resource management for scalable applications.', usedIn: ['Microservices on Azure'] },
    { name: 'Docker', logo: '/logos/docker.png', description: 'Containerized applications and data workflows using Docker.', usedIn: ['Python microservices', 'Football Analytics Website'] },
    { name: 'FastAPI', logo: '/logos/fastapi.svg ', description: 'Built high-performance APIs using FastAPI.', usedIn: ['Loan Default Prediction System'] },
    { name: 'JavaScript', logo: '/logos/javascript.png', description: 'Proficient in vanilla JS and ES6+ for web development.', usedIn: ['Dynamic visualizations', 'Client portals'] },
    { name: 'Kubernetes', logo: '/logos/kubernetes.png', description: 'Orchestrated container deployments using Kubernetes clusters.', usedIn: ['Production microservices at Deloitte'] },
    { name: 'MongoDB', logo: '/logos/mongo.png', description: 'Designed NoSQL schemas and queries in MongoDB.', usedIn: ['Interactive dashboards'] },
    { name: 'Node.js', logo: '/logos/nodejs.svg', description: 'Developed server-side applications with Node.js.', usedIn: ['Backend services', 'Project APIs'] },
    { name: 'NumPy', logo: '/logos/numpy.svg', description: 'Numerical computing and array operations with NumPy.', usedIn: ['Data preprocessing', 'ML pipelines'] },
    { name: 'Pandas', logo: '/logos/pandas.png', description: 'Data manipulation and analysis using Pandas.', usedIn: ['Data cleaning', 'Reporting scripts'] },
    { name: 'Plotly', logo: '/logos/plotly.svg', description: 'Created interactive data visualizations with Plotly.', usedIn: ['Spotify Profile', 'Football Analytics Website'] },
    { name: 'PostgreSQL', logo: '/logos/postgresql.png', description: 'Managed relational databases with PostgreSQL.', usedIn: ['Application modernization', 'Data storage'] },
    { name: 'Power BI', logo: '/logos/powerbi.png', description: 'Designed and developed Power BI dashboards.', usedIn: ['Dashboards at Deloitte'] },
    { name: 'Python', logo: '/logos/python.png', description: 'Proficient in Python for data analysis, scripting, and ML development.', usedIn: ['Loan Default Prediction System', 'ML pipelines'] },
    { name: 'R', logo: '/logos/r.svg', description: 'Statistical computing and visualization with R.', usedIn: ['Real Madrid vs Barcelona Analysis'] },
    { name: 'React', logo: '/logos/react.png', description: 'Built dynamic UI components and dashboards with React.', usedIn: ['Football Analytics Website', 'Client portals'] },
    { name: 'SciPy', logo: '/logos/scipy.svg', description: 'Advanced scientific computing using SciPy.', usedIn: ['Optimization tasks in ML models'] },
    { name: 'Spark', logo: '/logos/spark.png', description: 'Big data processing and streaming with Apache Spark.', usedIn: ['Loan Default Prediction System'] },
    { name: 'Spring Boot', logo: '/logos/springboot.svg', description: 'Developed Java microservices with Spring Boot.', usedIn: ['Deloitte application modernization'] },
    { name: 'Tableau', logo: '/logos/tableau.png', description: 'Created interactive Tableau dashboards.', usedIn: ['Dashboards at Deloitte'] },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.svg', description: 'Styled applications using Tailwind CSS.', usedIn: ['Portfolio site', 'Client portals'] },
    { name: 'TensorFlow', logo: '/logos/tensorflow.png', description: 'Designed and trained deep learning models in TensorFlow.', usedIn: ['Predictive models at Deloitte'] },
    { name: 'TypeScript', logo: '/logos/typescript.png', description: 'Type-safe development with TypeScript.', usedIn: ['React projects', 'Azure microservices'] },
  ];

export function Skills() {
  const [active, setActive] = useState<Skill | null>(null);
  return (
    <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
      <h3 className="text-4xl font-semibold text-primary mb-8">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <button
            key={skill.name}
            className="flex flex-col items-center p-4 bg-surface rounded-lg shadow hover:bg-surface/80 transition"
            onClick={() => setActive(skill)}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="h-12 w-12 mb-2" />
            <span className="text-accent">{skill.name}</span>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-background p-6 rounded-2xl max-w-lg mx-auto">
            <h4 className="text-2xl font-bold text-primary mb-4">{active.name}</h4>
            <p className="text-accent mb-4">{active.description}</p>
            <h5 className="font-medium text-surface mb-2">Used In:</h5>
            <ul className="list-disc list-inside text-accent">
              {active.usedIn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-primary text-background rounded hover:bg-primary/90"
              onClick={() => setActive(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}