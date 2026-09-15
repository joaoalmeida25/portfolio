interface FooterViewProps {
  name: string;
  year: number;
}

export const FooterView = ({ name, year }: FooterViewProps) => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-[120rem] px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
        <p className="text-xs text-text-muted">
          © {year} {name}
        </p>
      </div>
    </footer>
  );
};
