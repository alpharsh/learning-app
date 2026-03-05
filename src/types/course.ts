export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  lessonCount: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  shortDescription: string;
  content: string;
}

