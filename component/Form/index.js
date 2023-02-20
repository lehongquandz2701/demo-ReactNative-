import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "./style";
const Form = (props) => {
  const [state, setState] = useState("");
  const handleInput = (text) => {
    return setState(text);
  };
  const handleAddTask = () => {
    if (state.length === 0) {
      alert("Vui Long Nhap Cong Viec ");
      return false;
    }
    props.add(state);
    setState("");
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={15}
      style={styles.taskInput}
    >
      <TextInput
        value={state}
        onChangeText={handleInput}
        placeholder="Your Task"
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.taskAdd}>
          <Text style={styles.taskText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
