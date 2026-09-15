interface IProjectTechnologiesProps {
  technologies: Array<string>;
}

export const ProjectTechnologies = ({ technologies }: IProjectTechnologiesProps) => {
  return (
    <ul aria-label="Tecnologias do projeto" className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-control border border-border/50 bg-chip-background/50 px-3 py-1.5 text-xs leading-relaxed text-text-secondary"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
};
