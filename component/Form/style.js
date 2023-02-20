import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  taskInput: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    paddingVertical: 15,
    borderColor: "#66ffff",
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 20,
    fontSize: 16,
  },
  taskAdd: {
    backgroundColor: "#66ffff",
    height: 50,
    width: 50,
    borderRadius: "50%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  taskText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#FFF",
  },
});
export default styles;
