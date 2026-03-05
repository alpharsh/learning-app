import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import type { RootStackParamList } from "../navigation/RootNavigator";
import { colors } from "../theme/colors";
import { borderRadius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

type Props = NativeStackScreenProps<RootStackParamList, "LessonDetail">;

export const LessonDetailScreen: React.FC<Props> = ({ route }) => {
  const { lesson } = route.params;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <View style={styles.heroSection}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📖</Text>
        </View>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.subtitle}>{lesson.shortDescription}</Text>
      </View>

      <View style={styles.contentCard}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentLabel}>LESSON CONTENT</Text>
        </View>
        <Text style={styles.body}>{lesson.content}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Keep learning and growing! 🌱</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },
  content: {
    paddingBottom: spacing.xxxl,
  },
  heroSection: {
    backgroundColor: colors.background,
    padding: spacing.xl,
    alignItems: "center",
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  icon: {
    fontSize: 36,
  },
  title: {
    ...typography.heading,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
  },
  contentCard: {
    backgroundColor: colors.background,
    margin: spacing.lg,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  contentHeader: {
    marginBottom: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 2,
    borderBottomColor: colors.primarySoft,
  },
  contentLabel: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: "700",
  },
  body: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    lineHeight: 26,
  },
  footer: {
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  footerText: {
    ...typography.body,
    color: colors.textTertiary,
    textAlign: "center",
  },
});
