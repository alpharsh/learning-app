import { useEffect, useState, useCallback } from 'react';

import { fetchCourses } from '../api/mockClient';
import type { Course } from '../types/course';

interface UseCoursesResult {
  courses: Course[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useCourses = (): UseCoursesResult => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchCourses();
        if (isMounted) {
          setCourses(data);
        }
      } catch (err) {
        if (isMounted) {
          const message = err instanceof Error ? err.message : 'Something went wrong.';
          setError(message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [reloadKey]);

  return {
    courses,
    loading,
    error,
    refetch,
  };
};

