import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './components/Task';

const App: () => Node = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      {/*  TODAY'S TASKS */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/*  Place for tasks */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} key={index} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/*  NEW TASK */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          placeholderTextColor="black"
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    width: '100%',
    bottom: 20,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: 280,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    color: '#000',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
});

export default App;
