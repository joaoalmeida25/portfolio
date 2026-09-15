interface ExperienceDetailsProps {
  id: string;
  details: readonly string[];
}

export const ExperienceDetails = ({ id, details }: ExperienceDetailsProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-4 mt-8 border-y border-border/60 px-5 py-8 sm:py-10"
    >
      <h3 id={`${id}-title`} className="text-lg font-semibold text-text-primary">
        Principais contribuições
      </h3>
      <ul className="mt-5 max-w-5xl list-disc space-y-3 pl-5 text-sm leading-7 text-text-secondary marker:text-primary sm:text-base">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </section>
  );
};
