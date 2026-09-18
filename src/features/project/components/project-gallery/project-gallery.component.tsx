'use client';

import { useId, useState } from 'react';
import type { IProjectImage } from '@/types/projects.type';
import { ProjectGalleryView } from './project-gallery-view.component';
import type { IProjectGalleryLabels } from '../../project.types';

interface IProjectGalleryProps {
  title: string;
  images: Array<IProjectImage>;
  labels: IProjectGalleryLabels;
}

export const ProjectGallery = ({ title, images, labels }: IProjectGalleryProps) => {
  const imageId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ProjectGalleryView
      title={title}
      images={images}
      labels={labels}
      imageId={imageId}
      activeIndex={activeIndex}
      onSelect={setActiveIndex}
    />
  );
};
