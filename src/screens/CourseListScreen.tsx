import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { CourseCard } from "../components/CourseCard";
import { SearchBar } from "../components/SearchBar";
import { StateView } from "../components/StateView";
import { useCourses } from "../hooks/useCourses";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { filterCoursesByQuery } from "../utils/search";

type Props = NativeStackScreenProps<RootStackParamList, "Courses">;

export const CourseListScreen: React.FC<Props> = ({ navigation }) => {
  const { courses, loading, error, refetch } = useCourses();
  const [query, setQuery] = useState("");

  const filteredCourses = filterCoursesByQuery(courses, query);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover Learning</Text>
        <Text style={styles.subtitle}>
          Explore our collection of courses and start your learning journey
          today.
        </Text>
      </View>

      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search courses..."
      />

      <StateView
        loading={loading}
        error={error}
        isEmpty={!loading && !error && filteredCourses.length === 0}
        onRetry={refetch}
        emptyMessage={
          query ? "No courses match your search." : "No courses available yet."
        }
      >
        <FlatList
          data={filteredCourses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CourseCard
              course={item}
              onPress={() =>
                navigation.navigate("Lessons", {
                  courseId: item.id,
                  courseTitle: item.title,
                })
              }
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </StateView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xs,
  },
  emoji: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.heading,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.small,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  listContent: {
    paddingVertical: spacing.sm,
    paddingBottom: spacing.xxxl,
  },
});
