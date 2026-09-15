interface SectionHeadingProps {
  id: string;
  title: string;
}

export const SectionHeading = ({ id, title }: SectionHeadingProps) => {
  return (
    <h2 id={id} className="flex items-center gap-4 sm:gap-5">
      <span className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </span>
    </h2>
  );
};
