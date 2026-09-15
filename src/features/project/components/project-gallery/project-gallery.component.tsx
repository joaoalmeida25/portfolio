'use client';

import { useId, useState } from 'react';
import type { IProjectImage } from '@/types/projects.type';
import { ProjectGalleryView } from './project-gallery-view.component';

interface IProjectGalleryProps {
  title: string;
  images: Array<IProjectImage>;
}

export const ProjectGallery = ({ title, images }: IProjectGalleryProps) => {
  const imageId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ProjectGalleryView
      title={title}
      images={images}
      imageId={imageId}
      activeIndex={activeIndex}
      onSelect={setActiveIndex}
    />
  );
};
