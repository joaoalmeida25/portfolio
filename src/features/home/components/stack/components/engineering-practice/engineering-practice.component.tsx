interface EngineeringPracticeProps {
  label: string;
}

export const EngineeringPractice = ({ label }: EngineeringPracticeProps) => {
  return (
    <li className="rounded-control border border-border/60 bg-surface/40 px-3 py-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
      {label}
    </li>
  );
};
