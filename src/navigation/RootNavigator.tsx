import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { CourseListScreen } from "../screens/CourseListScreen";
import { LessonDetailScreen } from "../screens/LessonDetailScreen";
import { LessonListScreen } from "../screens/LessonListScreen";
import type { Lesson } from "../types/course";

export type RootStackParamList = {
  Courses: undefined;
  Lessons: {
    courseId: string;
    courseTitle: string;
  };
  LessonDetail: {
    lesson: Lesson;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Courses"
        component={CourseListScreen}
        options={{ title: "Learning App" }}
      />
      <Stack.Screen
        name="Lessons"
        component={LessonListScreen}
        options={({ route }) => ({ title: route.params.courseTitle })}
      />
      <Stack.Screen
        name="LessonDetail"
        component={LessonDetailScreen}
        options={({ route }) => ({ title: route.params.lesson.title })}
      />
    </Stack.Navigator>
  );
};
