import type { Course } from '../types/course';

export const filterCoursesByQuery = (courses: Course[], query: string): Course[] => {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return courses;
  }

  return courses.filter((course) => {
    const haystack = `${course.title} ${course.shortDescription} ${course.description}`.toLowerCase();
    return haystack.includes(trimmed);
  });
};

