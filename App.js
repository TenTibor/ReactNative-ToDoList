import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Task from './components/Task';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      {/*  TODAY'S TASKS */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tasks for today</Text>

        <View style={styles.items}>
          {/*  Place for tasks */}
          <Task text={'Hello'} />
          <Task text={'Another task'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 15,
  },
});

export default App;
