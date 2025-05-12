interface ProjectProps {
  name: string;
  description: string;
  websiteLink?: string;
  GitHubLink?: string;
  tech: string[];
}

export function ProjectCard({ name, description, websiteLink, GitHubLink, tech }: ProjectProps) {
  return (
    <div className="border border-surface p-6 rounded hover:bg-surface/20 transition">
      <h4 className="text-xl font-semibold text-primary mb-2">{name}</h4>
      <h5 className="text-accent text-l mb-4">{description}</h5>
      <ul className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <li key={t} className="text-s bg-surface/50 px-2 py-1 rounded">
            {t}
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Live Demo
          </a>
        )}
        {GitHubLink && (
          <a
            href={GitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}