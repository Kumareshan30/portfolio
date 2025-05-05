interface ProjectProps {
    name: string;
    description: string;
    link: string;
    tech: string[];
  }
  export function ProjectCard({ name, description, link, tech }: ProjectProps) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block border border-surface p-6 rounded hover:bg-surface/20 transition">
        <h4 className="text-xl font-semibold text-primary mb-2">{name}</h4>
        <p className="text-accent mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="text-xs bg-surface/50 px-2 py-1 rounded">{t}</li>
          ))}
        </ul>
      </a>
    );
  }