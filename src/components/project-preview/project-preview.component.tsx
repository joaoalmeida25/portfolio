import Image from 'next/image';
import type { IProjectImage } from '@/types/projects.type';

interface IProjectPreviewProps {
  title: string;
  image?: IProjectImage;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export const ProjectPreview = ({
  title,
  image,
  sizes,
  priority = false,
  className,
  imageClassName = 'object-contain',
}: IProjectPreviewProps) => {
  return (
    <div className={`relative aspect-video overflow-hidden bg-surface ${className ?? ''}`}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClassName}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-surface via-background-soft to-primary-soft/50 p-8"
        >
          <span className="absolute -top-20 -right-16 size-72 rounded-full border border-primary/15" />
          <span className="absolute -bottom-24 -left-12 size-64 rounded-full border border-border/60" />
          <span className="absolute inset-5 rounded-control border border-border/30" />
          <span className="relative max-w-xs text-center font-mono text-lg leading-relaxed font-medium text-text-secondary sm:text-xl">
            {title}
          </span>
        </div>
      )}
    </div>
  );
};
