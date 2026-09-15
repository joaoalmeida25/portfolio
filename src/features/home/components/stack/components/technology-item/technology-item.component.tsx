import Image from 'next/image';

interface ITechnologyItemProps {
  name: string;
  iconPath: string;
  monochrome?: boolean;
}

export const TechnologyItem = ({ name, iconPath, monochrome = false }: ITechnologyItemProps) => {
  return (
    <li className="flex min-w-0 flex-col items-center gap-4 rounded-control border border-border/40 bg-surface/50 px-3 py-6 text-center">
      <span className="flex size-12 items-center justify-center">
        <Image
          src={iconPath}
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className={`size-10 object-contain ${monochrome ? 'invert [[data-theme=light]_&]:invert-0' : ''}`}
        />
      </span>
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </li>
  );
};
