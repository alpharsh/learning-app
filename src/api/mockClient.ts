import { Course, Lesson } from '../types/course';

const COURSES: Course[] = [
  {
    id: 'react-native-basics',
    title: 'React Native Basics',
    shortDescription: 'Learn the fundamentals of building mobile apps with React Native.',
    description:
      'This course introduces core React Native concepts including components, props, state, and styling.',
    lessonCount: 3,
  },
  {
    id: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    shortDescription: 'Dive deeper into hooks, composition, and reusable patterns.',
    description:
      'Explore advanced state management patterns, custom hooks, and techniques for building scalable UIs.',
    lessonCount: 2,
  },
];

const LESSONS: Lesson[] = [
  {
    id: 'rn-1',
    courseId: 'react-native-basics',
    title: 'Getting Started with React Native',
    shortDescription: 'Set up your environment and create your first app.',
    content:
      'In this lesson, you will install the Expo CLI, create a new React Native project, and run it on a simulator or device.',
  },
  {
    id: 'rn-2',
    courseId: 'react-native-basics',
    title: 'Components and Props',
    shortDescription: 'Understand how to build UIs with components.',
    content:
      'This lesson covers how to define functional components, pass data via props, and compose complex UIs from smaller pieces.',
  },
  {
    id: 'rn-3',
    courseId: 'react-native-basics',
    title: 'State and Events',
    shortDescription: 'Manage local state and handle user interactions.',
    content:
      'You will learn how to use the useState hook, respond to button presses, and update the UI in response to user input.',
  },
  {
    id: 'adv-1',
    courseId: 'advanced-react-patterns',
    title: 'Custom Hooks',
    shortDescription: 'Extract logic into reusable hooks.',
    content:
      'Custom hooks allow you to share stateful logic between components. This lesson demonstrates how to design and use them effectively.',
  },
  {
    id: 'adv-2',
    courseId: 'advanced-react-patterns',
    title: 'Performance Optimization',
    shortDescription: 'Keep your app fast and responsive.',
    content:
      'Learn techniques like memoization, lazy loading, and virtualization to keep large React Native apps performing well.',
  },
];

const simulateDelay = (minMs = 500, maxMs = 1200) => {
  const duration = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise<void>((resolve) => setTimeout(resolve, duration));
};

const maybeThrowError = () => {
  // Roughly 15% chance of throwing to exercise error states.
  if (Math.random() < 0.15) {
    throw new Error('Network request failed. Please try again.');
  }
};

export const fetchCourses = async (): Promise<Course[]> => {
  await simulateDelay();
  maybeThrowError();
  return COURSES;
};

export const fetchLessonsByCourseId = async (courseId: string): Promise<Lesson[]> => {
  await simulateDelay();
  maybeThrowError();
  return LESSONS.filter((lesson) => lesson.courseId === courseId);
};

