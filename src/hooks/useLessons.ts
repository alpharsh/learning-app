import { useCallback, useEffect, useState } from 'react';

import { fetchLessonsByCourseId } from '../api/mockClient';
import type { Lesson } from '../types/course';

interface UseLessonsResult {
  lessons: Lesson[];
  loading: boolean;
  error: string | null;
  completed: Record<string, boolean>;
  toggleCompleted: (lessonId: string) => void;
  refetch: () => void;
}

export const useLessons = (courseId: string): UseLessonsResult => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1);
  }, []);

  const toggleCompleted = useCallback((lessonId: string) => {
    setCompleted((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  }, []);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchLessonsByCourseId(courseId);
        if (isMounted) {
          setLessons(data);
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

    if (courseId) {
      load();
    }

    return () => {
      isMounted = false;
    };
  }, [courseId, reloadKey]);

  return {
    lessons,
    loading,
    error,
    completed,
    toggleCompleted,
    refetch,
  };
};

