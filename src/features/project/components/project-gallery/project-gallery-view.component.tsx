import { Button } from '@/components/ui/button/button.component';
import { ProjectPreview } from '@/components/project-preview/project-preview.component';
import type { IProjectImage } from '@/types/projects.type';

interface IProjectGalleryViewProps {
  title: string;
  images: Array<IProjectImage>;
  imageId: string;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const ProjectGalleryView = ({
  title,
  images,
  imageId,
  activeIndex,
  onSelect,
}: IProjectGalleryViewProps) => {
  const hasMultipleImages = images.length > 1;

  return (
    <div role="group" aria-label={`Galeria de ${title}`} className="min-w-0">
      <div id={imageId} className="overflow-hidden rounded-control bg-background-soft">
        <ProjectPreview
          title={title}
          image={images[activeIndex]}
          sizes="(min-width: 1920px) 1018px, (min-width: 1280px) calc((100vw - 224px) * 0.6), (min-width: 1024px) calc((100vw - 160px) * 0.6), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
          priority={activeIndex === 0}
          className="!bg-background-soft"
        />
      </div>
      {hasMultipleImages && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <p
            role="status"
            aria-atomic="true"
            className="text-sm whitespace-nowrap text-text-muted tabular-nums"
          >
            <span className="sr-only">Imagem </span>
            {activeIndex + 1} / {images.length}
          </p>
          <div role="group" aria-label="Navegação das imagens" className="flex shrink-0 gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Imagem anterior"
              aria-controls={imageId}
              disabled={activeIndex === 0}
              onClick={() => onSelect(activeIndex - 1)}
            >
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
                <path d="M20 12H4m6-6-6 6 6 6" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Próxima imagem"
              aria-controls={imageId}
              disabled={activeIndex === images.length - 1}
              onClick={() => onSelect(activeIndex + 1)}
            >
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
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
