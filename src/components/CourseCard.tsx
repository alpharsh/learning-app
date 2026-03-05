import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import type { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
  onPress: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{course.title}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{course.lessonCount} lessons</Text>
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {course.shortDescription}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.heading,
    color: colors.textPrimary,
    flex: 1,
    marginRight: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
  badge: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  badgeText: {
    ...typography.small,
    color: colors.primary,
  },
});

