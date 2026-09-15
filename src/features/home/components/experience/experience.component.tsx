'use client';

import { useEffect, useRef, useState } from 'react';
import { ExperienceView } from './experience-view.component';
import { experiences } from '@/features/home/components/experience/experience.constants';

export const Experience = () => {
  const timelineRef = useRef<HTMLOListElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
  const activeExperience = experiences.find((experience) => experience.id === selectedId) ?? null;

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const updateNavigation = () => {
      const maximumScroll = timeline.scrollWidth - timeline.clientWidth;
      setCanGoPrevious(timeline.scrollLeft > 1);
      setCanGoNext(timeline.scrollLeft < maximumScroll - 1);

      const itemWidth = timeline.firstElementChild?.getBoundingClientRect().width ?? 0;
      const gap = Number.parseFloat(window.getComputedStyle(timeline).columnGap) || 0;
      const itemStep = itemWidth + gap;

      if (itemStep > 0) {
        const nearestIndex = Math.round(timeline.scrollLeft / itemStep);
        setActiveTimelineIndex(Math.max(0, Math.min(nearestIndex, experiences.length - 1)));
      }
    };

    const frame = requestAnimationFrame(updateNavigation);
    const observer = new ResizeObserver(updateNavigation);
    observer.observe(timeline);
    timeline.addEventListener('scroll', updateNavigation, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      timeline.removeEventListener('scroll', updateNavigation);
    };
  }, []);

  const navigate = (direction: -1 | 1) => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const itemWidth =
      timeline.firstElementChild?.getBoundingClientRect().width ?? timeline.clientWidth;
    const gap = Number.parseFloat(window.getComputedStyle(timeline).columnGap) || 0;

    timeline.scrollBy({
      left: direction * (itemWidth + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

  const selectExperience = (id: string) => {
    setSelectedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <ExperienceView
      experiences={experiences}
      activeExperience={activeExperience}
      activeTimelineIndex={activeTimelineIndex}
      timelineRef={timelineRef}
      canGoPrevious={canGoPrevious}
      canGoNext={canGoNext}
      onPrevious={() => navigate(-1)}
      onNext={() => navigate(1)}
      onSelect={selectExperience}
    />
  );
};
