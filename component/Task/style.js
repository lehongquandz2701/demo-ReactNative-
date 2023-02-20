import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "#99cccc",
    borderWidth: 1.2,
    marginVertical: 10,
  },
  stt: {
    width: 48,
    height: 35,
    borderRadius: 8,
    borderColor: "#33ff99",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  even: {
    backgroundColor: "blue",
  },
  odd: {
    backgroundColor: "green",
  },
  TaskNumber: {
    fontSize: 21,
    color: "#fff",
  },
  nameTask: {
    width: "80%",
    fontSize: 20,
  },
});
export default styles;
