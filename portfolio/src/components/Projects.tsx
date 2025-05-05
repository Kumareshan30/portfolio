import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    name: 'Real Madrid vs Barcelona Analysis Dashboard',
    description: 'Interactive dashboard with statistical analysis and visualizations using D3.js and R Shiny',
    link: '#',
    tech: ['D3.js', 'R Shiny', 'JavaScript', 'R']
  },
  {
    name: 'Loan Default Prediction System',
    description: 'Big Data analysis and real-time streaming using Apache PySpark, Hadoop, and Kafka',
    link: '#',
    tech: ['PySpark', 'Hadoop', 'Kafka']
  },
  {
    name: '2D Map Generating Autonomous Rover',
    description: 'SLAM LIDAR mapping displayed via React.js on Heroku; Python-based controls on Raspberry Pi',
    link: '#',
    tech: ['SLAM', 'LIDAR', 'React.js', 'Python']
  },
  {
    name: 'Football Analytics & Predictions Website',
    description: 'Built with React TypeScript frontend and Python Flask backend; includes Random Forest models',
    link: '#',
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'Random Forest']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <h3 className="text-4xl font-semibold text-primary mb-8">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.name} {...proj} />
        ))}
      </div>
    </section>
  );
}