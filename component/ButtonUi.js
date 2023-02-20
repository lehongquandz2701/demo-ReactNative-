import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import React from "react";

const ButtonUi = (props) => {
  const { onPress, name, isChecked } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        backgroundColor: isChecked ? "#fff" : null,
        height: 50,
        borderRadius: 10,
        borderColor: "#99ccff",
        borderWidth: 1.5,
        marginVertical: 5,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          lineHeight: 50,
          color: isChecked === true ? "pink" : "#99ccff",
          fontSize: 20,
        }}
      >
        {name}
      </Text>
      {isChecked ? (
        <FontAwesome5
          style={{ position: "absolute", top: 15, left: 15 }}
          name="check-circle"
          size={20}
          color="green"
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default ButtonUi;
