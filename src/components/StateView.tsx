import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

interface StateViewProps {
  loading: boolean;
  error: string | null;
  isEmpty: boolean;
  onRetry?: () => void;
  emptyMessage?: string;
  children: React.ReactNode;
}

export const StateView: React.FC<StateViewProps> = ({
  loading,
  error,
  isEmpty,
  onRetry,
  emptyMessage = 'Nothing to show yet.',
  children,
}) => {
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        {onRetry && <Button title="Try again" onPress={onRetry} />}
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  loadingText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
  errorText: {
    ...typography.body,
    color: colors.danger,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

