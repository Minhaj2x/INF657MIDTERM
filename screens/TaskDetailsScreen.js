import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TaskDetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: task.image }} style={styles.image} />
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.category}>Category: {task.category}</Text>
      <Text style={styles.datetime}>Date & Time: {task.dateTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  description: { fontSize: 16, marginVertical: 10 },
  category: { fontSize: 16, color: '#007BFF' },
  datetime: { fontSize: 14, color: '#888', marginTop: 10 },
});
