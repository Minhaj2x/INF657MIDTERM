import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import TaskItem from '../components/TaskItem';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Buy Groceries',
      description: 'Milk, eggs, fruits, and bread',
      category: 'Home',
      image: 'https://via.placeholder.com/100',
      dateTime: 'April 1, 2025 - 10:00 AM',
    },
    {
      id: '2',
      title: 'Team Meeting',
      description: 'Discuss project status and goals',
      category: 'Work',
      image: 'https://via.placeholder.com/100',
      dateTime: 'April 1, 2025 - 3:00 PM',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onPress={() => navigation.navigate('Details', { task: item })} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add Task ➕"
        onPress={() => navigation.navigate('AddTask', { setTasks })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
