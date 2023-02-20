đây là file chính App.js ...


import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "./component/Task";
import styles from "./App.component.style";
import Form from "./component/Form";
export default function App() {
  const [tasks, setTask] = useState([]);

  const handleRenderTask = (state) => {
    setTask((prev) => {
      const newTask = [...prev, state];
      const jsonTask = JSON.stringify(newTask);
      AsyncStorage.setItem("task", jsonTask);
      return newTask;
    });
  };
  const getTask = async () => {
    try {
      const task = await AsyncStorage.getItem("task");
      return JSON.parse(task);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getTask().then((task) => {
      console.log(task);
      setTask(task || []);
    });
  }, []);
  const handleDeleteTask = (index) => {
    Alert.alert("Thông Báo", "Bạn có chắc muốn xóa", [
      {
        text: "OK",
        onPress: () => {
          let tasksList = [...tasks];
          tasksList.splice(index, 1);
          return setTask(tasksList);
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.Header}>Todo List </Text>
        <ScrollView>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                nameTask={task}
                index={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              ></Task>
            );
          })}
        </ScrollView>
      </View>
      <Form add={handleRenderTask} />
    </View>
  );
}
