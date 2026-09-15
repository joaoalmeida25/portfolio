import { ThemeToggle } from '@/components/theme-toggle/theme-toggle.component';

interface FooterViewProps {
  monogram: string;
  name: string;
  role: string;
  year: number;
}

export const FooterView = ({ monogram, name, role, year }: FooterViewProps) => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto flex max-w-[120rem] flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-24">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="font-mono text-2xl font-semibold text-primary">
            {monogram}
          </span>
          <div>
            <p className="text-sm font-medium text-text-primary">{name}</p>
            <p className="mt-1 text-xs text-text-muted">{role}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 sm:gap-8">
          <p className="text-xs text-text-muted">
            © {year} {name}
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};
