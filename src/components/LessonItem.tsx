import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../theme/colors";
import { borderRadius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import type { Lesson } from "../types/course";

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
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{completed ? "✅" : "📝"}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[styles.title, completed && styles.titleCompleted]}
          numberOfLines={1}
        >
          {lesson.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {lesson.shortDescription}
        </Text>
      </View>
      <Pressable
        onPress={(e) => {
          e.stopPropagation();
          onToggleCompleted();
        }}
        style={({ pressed }) => [
          styles.checkButton,
          completed && styles.checkButtonCompleted,
          pressed && styles.checkButtonPressed,
        ]}
      >
        {completed && <Text style={styles.checkmark}>✓</Text>}
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  icon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  title: {
    ...typography.bodySemibold,
    color: colors.textPrimary,
    marginBottom: spacing.xxs,
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: colors.textTertiary,
  },
  description: {
    ...typography.small,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  checkButton: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  checkButtonCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  checkButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  checkmark: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.background,
  },
});
