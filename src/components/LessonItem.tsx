import React from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import type { Lesson } from '../types/course';

interface LessonItemProps {
  lesson: Lesson;
  completed: boolean;
  onToggleCompleted: () => void;
  onPress: () => void;
}

export const LessonItem: React.FC<LessonItemProps> = ({
  lesson,
  completed,
  onToggleCompleted,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, completed && styles.titleCompleted]} numberOfLines={1}>
          {lesson.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {lesson.shortDescription}
        </Text>
      </View>
      <Switch value={completed} onValueChange={onToggleCompleted} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.85,
  },
  textContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  title: {
    ...typography.subheading,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: colors.muted,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
});

