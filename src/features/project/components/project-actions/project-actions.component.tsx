import Image from 'next/image';
import { Button } from '@/components/ui/button/button.component';
import { PROJECT_ACTIONS } from './project-actions.constants';
import { IProjectLinks } from '@/types/projects.type';

interface IProjectActionsProps {
  links: IProjectLinks;
}

const isYouTubeLink = (href: string) => {
  const { hostname } = new URL(href);
  return hostname === 'youtu.be' || hostname === 'youtube.com' || hostname.endsWith('.youtube.com');
};

export const ProjectActions = ({ links }: IProjectActionsProps) => {
  const actions = PROJECT_ACTIONS.flatMap((action) => {
    const href = links[action.key];
    return href ? [{ ...action, href }] : [];
  });

  if (actions.length === 0) return null;

  return (
    <div className="mt-10 flex flex-wrap gap-3 border-t border-border/50 pt-8">
      {actions.map((action) => (
        <Button
          key={action.key}
          href={action.href}
          variant="secondary"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={
            action.key === 'demo' && !isYouTubeLink(action.href) ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M15 3h6v6m0-6L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
              </svg>
            ) : (
              <Image
                src={action.iconPath}
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="object-contain invert [[data-theme=light]_&]:invert-0"
              />
            )
          }
        >
          {action.label}
          <span className="sr-only"> (abre em nova aba)</span>
        </Button>
      ))}
    </div>
  );
};
