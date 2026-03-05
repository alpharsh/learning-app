import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  input: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 999,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.textPrimary,
  },
});

