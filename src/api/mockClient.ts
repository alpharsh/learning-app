import { Course, Lesson } from "../types/course";

const COURSES: Course[] = [
  {
    id: "react-native-basics",
    title: "React Native Basics",
    shortDescription:
      "Learn the fundamentals of building mobile apps with React Native.",
    description:
      "This course introduces core React Native concepts including components, props, state, and styling.",
    lessonCount: 3,
  },
  {
    id: "advanced-react-patterns",
    title: "Advanced React Patterns",
    shortDescription:
      "Dive deeper into hooks, composition, and reusable patterns.",
    description:
      "Explore advanced state management patterns, custom hooks, and techniques for building scalable UIs.",
    lessonCount: 2,
  },
  {
    id: "typescript-fundamentals",
    title: "TypeScript Fundamentals",
    shortDescription: "Master TypeScript for safer and more maintainable code.",
    description:
      "Learn TypeScript basics, type annotations, interfaces, generics, and how to use TypeScript effectively in React Native projects.",
    lessonCount: 4,
  },
  {
    id: "mobile-design-patterns",
    title: "Mobile Design Patterns",
    shortDescription: "Build beautiful and intuitive mobile user interfaces.",
    description:
      "Discover common mobile UI patterns, design principles, and how to create responsive layouts that work across different screen sizes.",
    lessonCount: 3,
  },
  {
    id: "state-management-redux",
    title: "State Management with Redux",
    shortDescription: "Manage complex application state with Redux Toolkit.",
    description:
      "Learn how to implement Redux in React Native apps, create slices, manage async operations, and structure your state effectively.",
    lessonCount: 4,
  },
  {
    id: "testing-react-native",
    title: "Testing React Native Apps",
    shortDescription: "Write reliable tests for your mobile applications.",
    description:
      "Master unit testing, component testing with React Native Testing Library, and end-to-end testing with Detox.",
    lessonCount: 3,
  },
  {
    id: "navigation-patterns",
    title: "Navigation in React Native",
    shortDescription: "Implement navigation flows with React Navigation.",
    description:
      "Learn stack navigation, tab navigation, drawer navigation, and how to pass parameters between screens in React Native apps.",
    lessonCount: 3,
  },
  {
    id: "api-integration",
    title: "API Integration & Networking",
    shortDescription: "Connect your app to backend services and APIs.",
    description:
      "Learn how to fetch data from REST APIs, handle authentication, manage loading states, and implement offline-first features.",
    lessonCount: 4,
  },
];

const LESSONS: Lesson[] = [
  {
    id: "rn-1",
    courseId: "react-native-basics",
    title: "Getting Started with React Native",
    shortDescription: "Set up your environment and create your first app.",
    content:
      "In this lesson, you will install the Expo CLI, create a new React Native project, and run it on a simulator or device.",
  },
  {
    id: "rn-2",
    courseId: "react-native-basics",
    title: "Components and Props",
    shortDescription: "Understand how to build UIs with components.",
    content:
      "This lesson covers how to define functional components, pass data via props, and compose complex UIs from smaller pieces.",
  },
  {
    id: "rn-3",
    courseId: "react-native-basics",
    title: "State and Events",
    shortDescription: "Manage local state and handle user interactions.",
    content:
      "You will learn how to use the useState hook, respond to button presses, and update the UI in response to user input.",
  },
  {
    id: "adv-1",
    courseId: "advanced-react-patterns",
    title: "Custom Hooks",
    shortDescription: "Extract logic into reusable hooks.",
    content:
      "Custom hooks allow you to share stateful logic between components. This lesson demonstrates how to design and use them effectively.",
  },
  {
    id: "adv-2",
    courseId: "advanced-react-patterns",
    title: "Performance Optimization",
    shortDescription: "Keep your app fast and responsive.",
    content:
      "Learn techniques like memoization, lazy loading, and virtualization to keep large React Native apps performing well.",
  },
  {
    id: "ts-1",
    courseId: "typescript-fundamentals",
    title: "Introduction to TypeScript",
    shortDescription:
      "Understand why TypeScript matters for mobile development.",
    content:
      "Learn the benefits of static typing, how TypeScript enhances code quality, and how to set up TypeScript in a React Native project.",
  },
  {
    id: "ts-2",
    courseId: "typescript-fundamentals",
    title: "Types and Interfaces",
    shortDescription: "Define types for your data and components.",
    content:
      "Master primitive types, object types, interfaces, and type aliases. Learn when to use each and how to type React components and props.",
  },
  {
    id: "ts-3",
    courseId: "typescript-fundamentals",
    title: "Generics and Advanced Types",
    shortDescription: "Write reusable and flexible type-safe code.",
    content:
      "Explore generic types, union and intersection types, mapped types, and conditional types to create powerful type definitions.",
  },
  {
    id: "ts-4",
    courseId: "typescript-fundamentals",
    title: "TypeScript Best Practices",
    shortDescription: "Write clean and maintainable TypeScript code.",
    content:
      "Learn common TypeScript patterns, how to avoid type assertions, configure strict mode, and structure types in large React Native apps.",
  },
  {
    id: "md-1",
    courseId: "mobile-design-patterns",
    title: "Mobile UI Principles",
    shortDescription: "Learn the fundamentals of mobile interface design.",
    content:
      "Understand touch targets, spacing, typography, and how mobile interfaces differ from web. Learn iOS and Android design guidelines.",
  },
  {
    id: "md-2",
    courseId: "mobile-design-patterns",
    title: "Responsive Layouts",
    shortDescription: "Build layouts that adapt to different screen sizes.",
    content:
      "Master Flexbox in React Native, handle different device dimensions, and create responsive designs that work on phones and tablets.",
  },
  {
    id: "md-3",
    courseId: "mobile-design-patterns",
    title: "Animations and Gestures",
    shortDescription: "Add delightful interactions to your app.",
    content:
      "Learn how to use the Animated API, implement smooth transitions, and handle touch gestures with React Native Gesture Handler.",
  },
  {
    id: "redux-1",
    courseId: "state-management-redux",
    title: "Redux Fundamentals",
    shortDescription: "Understand the core concepts of Redux.",
    content:
      "Learn about actions, reducers, store, and the unidirectional data flow. Understand when Redux is the right choice for your app.",
  },
  {
    id: "redux-2",
    courseId: "state-management-redux",
    title: "Redux Toolkit Setup",
    shortDescription: "Set up Redux Toolkit in your React Native app.",
    content:
      "Install and configure Redux Toolkit, create slices with createSlice, and connect Redux to your React Native components with hooks.",
  },
  {
    id: "redux-3",
    courseId: "state-management-redux",
    title: "Async Operations with Thunks",
    shortDescription: "Handle asynchronous logic in Redux.",
    content:
      "Learn how to use createAsyncThunk for API calls, manage loading and error states, and handle side effects in Redux applications.",
  },
  {
    id: "redux-4",
    courseId: "state-management-redux",
    title: "Advanced Redux Patterns",
    shortDescription: "Structure Redux for large-scale applications.",
    content:
      "Master feature-based organization, normalization, selectors with Reselect, and Redux middleware for complex state management scenarios.",
  },
  {
    id: "test-1",
    courseId: "testing-react-native",
    title: "Testing Fundamentals",
    shortDescription: "Learn why testing matters and testing strategies.",
    content:
      "Understand the testing pyramid, unit vs integration vs E2E tests, and set up Jest for testing React Native applications.",
  },
  {
    id: "test-2",
    courseId: "testing-react-native",
    title: "Component Testing",
    shortDescription: "Test React Native components with Testing Library.",
    content:
      "Learn React Native Testing Library, write tests that mirror user behavior, query elements, simulate events, and test component output.",
  },
  {
    id: "test-3",
    courseId: "testing-react-native",
    title: "Testing Hooks and Navigation",
    shortDescription: "Test custom hooks and navigation flows.",
    content:
      "Master testing custom hooks with renderHook, mock navigation, test async operations, and verify screen transitions in your app.",
  },
  {
    id: "nav-1",
    courseId: "navigation-patterns",
    title: "React Navigation Setup",
    shortDescription: "Install and configure React Navigation.",
    content:
      "Set up React Navigation in your app, understand navigators, screens, and routes, and implement your first navigation flow.",
  },
  {
    id: "nav-2",
    courseId: "navigation-patterns",
    title: "Stack and Tab Navigation",
    shortDescription: "Implement common navigation patterns.",
    content:
      "Create stack navigators for hierarchical flows, tab navigators for main app sections, and combine them to build complex navigation structures.",
  },
  {
    id: "nav-3",
    courseId: "navigation-patterns",
    title: "Navigation Params and Deep Linking",
    shortDescription: "Pass data between screens and handle deep links.",
    content:
      "Learn how to pass and access route parameters, implement type-safe navigation, and configure deep linking for your React Native app.",
  },
  {
    id: "api-1",
    courseId: "api-integration",
    title: "REST API Basics",
    shortDescription: "Learn how to fetch data from REST APIs.",
    content:
      "Understand HTTP methods, status codes, and headers. Use fetch or axios to make API calls and handle responses in React Native.",
  },
  {
    id: "api-2",
    courseId: "api-integration",
    title: "Authentication and Security",
    shortDescription: "Implement secure authentication flows.",
    content:
      "Learn OAuth, JWT tokens, secure storage with AsyncStorage or SecureStore, and how to handle authentication state in your app.",
  },
  {
    id: "api-3",
    courseId: "api-integration",
    title: "Data Caching and Offline Mode",
    shortDescription: "Build resilient apps that work offline.",
    content:
      "Implement caching strategies with libraries like React Query or SWR, handle offline scenarios, and sync data when connectivity returns.",
  },
  {
    id: "api-4",
    courseId: "api-integration",
    title: "GraphQL Integration",
    shortDescription: "Connect to GraphQL APIs with Apollo Client.",
    content:
      "Learn GraphQL fundamentals, set up Apollo Client, write queries and mutations, and manage GraphQL state in React Native applications.",
  },
];

const simulateDelay = (minMs = 500, maxMs = 1200) => {
  const duration = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise<void>((resolve) => setTimeout(resolve, duration));
};

const maybeThrowError = () => {
  // Roughly 15% chance of throwing to exercise error states.
  if (Math.random() < 0.15) {
    throw new Error("Network request failed. Please try again.");
  }
};

export const fetchCourses = async (): Promise<Course[]> => {
  await simulateDelay();
  maybeThrowError();
  return COURSES;
};

export const fetchLessonsByCourseId = async (
  courseId: string,
): Promise<Lesson[]> => {
  await simulateDelay();
  maybeThrowError();
  return LESSONS.filter((lesson) => lesson.courseId === courseId);
};
