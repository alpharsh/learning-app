import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { LessonItem } from "../components/LessonItem";
import { StateView } from "../components/StateView";
import { useLessons } from "../hooks/useLessons";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { colors } from "../theme/colors";
import { borderRadius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

type Props = NativeStackScreenProps<RootStackParamList, "Lessons">;

export const LessonListScreen: React.FC<Props> = ({ route, navigation }) => {
  const { courseId } = route.params;
  const { lessons, loading, error, completed, toggleCompleted, refetch } =
    useLessons(courseId);

  const completedCount = Object.values(completed).filter(Boolean).length;
  const totalCount = lessons.length;
  const progress =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      {!loading && lessons.length > 0 && (
        <View style={styles.header}>
          <View style={styles.statsContainer}>
            <Text style={styles.statsEmoji}>📊</Text>
            <View style={styles.statsTextContainer}>
              <Text style={styles.statsLabel}>Your Progress</Text>
              <Text style={styles.statsValue}>
                {completedCount} of {totalCount} completed
              </Text>
            </View>
            <View style={styles.progressBadge}>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>
      )}

      <StateView
        loading={loading}
        error={error}
        isEmpty={!loading && !error && lessons.length === 0}
        onRetry={refetch}
        emptyMessage="This course has no lessons yet."
      >
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <LessonItem
              lesson={item}
              completed={!!completed[item.id]}
              onToggleCompleted={() => toggleCompleted(item.id)}
              onPress={() =>
                navigation.navigate("LessonDetail", {
                  lesson: item,
                })
              }
            />
          )}
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
    backgroundColor: colors.background,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderBottomLeftRadius: borderRadius.lg,
    borderBottomRightRadius: borderRadius.lg,
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  statsEmoji: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  statsTextContainer: {
    flex: 1,
  },
  statsLabel: {
    ...typography.small,
    color: colors.textSecondary,
    marginBottom: spacing.xxs,
  },
  statsValue: {
    ...typography.bodySemibold,
    color: colors.textPrimary,
  },
  progressBadge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  progressText: {
    ...typography.bodySemibold,
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.full,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  listContent: {
    paddingVertical: spacing.sm,
    paddingBottom: spacing.xxxl,
  },
});
