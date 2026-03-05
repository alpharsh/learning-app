import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LessonItem } from '../components/LessonItem';
import { StateView } from '../components/StateView';
import { useLessons } from '../hooks/useLessons';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'Lessons'>;

export const LessonListScreen: React.FC<Props> = ({ route, navigation }) => {
  const { courseId } = route.params;
  const { lessons, loading, error, completed, toggleCompleted, refetch } = useLessons(courseId);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StateView
        loading={loading}
        error={error}
        isEmpty={!loading && !error && lessons.length === 0}
        onRetry={refetch}
        emptyMessage="This course has no lessons yet.">
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <LessonItem
              lesson={item}
              completed={!!completed[item.id]}
              onToggleCompleted={() => toggleCompleted(item.id)}
              onPress={() =>
                navigation.navigate('LessonDetail', {
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
  listContent: {
    paddingVertical: spacing.sm,
    paddingBottom: spacing.xl,
  },
});


