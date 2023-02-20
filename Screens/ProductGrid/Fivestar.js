import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Product } from "../../DataList/index";
function Fivestar(props) {
  const { numberofstar } = props;
  const arr = [0, 1, 2, 3, 4];
  return arr.map((item, index) => {
    return (
      <FontAwesome5
        key={index}
        name="star"
        size={10}
        color={item <= numberofstar - 1 ? "#ff9900" : "#999"}
      />
    );
  });
}
export default Fivestar;
