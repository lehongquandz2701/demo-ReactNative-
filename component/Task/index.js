import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
const Task = (props) => {
  const { index } = props;
  const numberText = props.index < 10 ? `0${props.index}` : props.index;
  const taskBg = index % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity onPress={props.onDeleteTask}>
      <View style={styles.task}>
        <View style={[styles.stt, taskBg]}>
          <Text style={styles.TaskNumber}>{numberText}</Text>
        </View>
        <Text style={styles.nameTask}>{props.nameTask}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
