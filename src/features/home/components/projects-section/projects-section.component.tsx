'use client';

import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '@/constants/projects.constants';
import { ProjectsSectionView } from './projects-section-view.component';

export const ProjectsSection = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
  const isScrollable = PROJECTS.length >= 3;

  useEffect(() => {
    const list = listRef.current;
    if (!isScrollable || !list) return;

    const updateNavigation = () => {
      const maximumScroll = list.scrollWidth - list.clientWidth;
      setCanGoPrevious(list.scrollLeft > 1);
      setCanGoNext(list.scrollLeft < maximumScroll - 1);
    };

    const frame = requestAnimationFrame(updateNavigation);
    const observer = new ResizeObserver(updateNavigation);
    observer.observe(list);
    list.addEventListener('scroll', updateNavigation, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      list.removeEventListener('scroll', updateNavigation);
    };
  }, [isScrollable]);

  const navigate = (direction: -1 | 1) => {
    const list = listRef.current;
    if (!list) return;

    const itemWidth = list.firstElementChild?.getBoundingClientRect().width ?? list.clientWidth;
    const gap = Number.parseFloat(window.getComputedStyle(list).columnGap) || 0;

    list.scrollBy({
      left: direction * (itemWidth + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

  return (
    <ProjectsSectionView
      projects={PROJECTS}
      listRef={listRef}
      isScrollable={isScrollable}
      canGoPrevious={canGoPrevious}
      canGoNext={canGoNext}
      onPrevious={() => navigate(-1)}
      onNext={() => navigate(1)}
    />
  );
};
