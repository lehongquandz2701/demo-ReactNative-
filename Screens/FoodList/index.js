import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isValidEmail, isValidPassWord } from "../../Validation";
import { Data, DataItem } from "../../DataList";
import FoodItems from "./FoodItems";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FoodList = (props) => {
  const [searchText, setSearhText] = useState("");
  const fiterSeacrFood = () => {
    return Data.filter(
      (eachFood) =>
        eachFood.name.includes(searchText) ||
        eachFood.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 20,
        marginTop: StatusBar.currentHeight || 0,
      }}
    >
      <View
        style={{
          marginTop: 40,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <FontAwesome5
          style={{ position: "absolute", top: 21, left: 30, zIndex: 1 }}
          name="searchengin"
          color={"#fff"}
          size={20}
        />

        <TextInput
          value={searchText}
          onChangeText={(text) => {
            setSearhText(text);
          }}
          placeholder="Tìm Kiếm"
          style={{
            height: 40,
            backgroundColor: "#ccc",
            width: "80%",
            borderRadius: 15,
            paddingLeft: 60,
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            setSearhText("");
          }}
          style={{
            position: "absolute",
            right: 75,
            backgroundColor: "#fff",
            height: 35,
            paddingHorizontal: 10,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", lineHeight: 35 }}>
            X
          </Text>
        </TouchableOpacity>
        <FontAwesome5
          style={{ marginLeft: 30 }}
          name="bars"
          color={"#ccc"}
          size={40}
        />
      </View>
      <View
        style={{
          height: 100,
          marginTop: 20,
        }}
      >
        <View style={{ height: 1, backgroundColor: "#000" }}></View>
        <FlatList
          horizontal={true}
          data={DataItem}
          style={{ flex: 1, flexDirection: "row" }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert(`you choose ${item.name}`);
                }}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    resizeMode: "cover",
                    borderRadius: 25,
                    margin: 10,
                  }}
                  source={{
                    uri: item.url,
                  }}
                ></Image>
                <Text style={{ fontSize: 16 * 0.8 }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
        <View style={{ height: 1, backgroundColor: "#000" }}></View>
        <View></View>
      </View>
      {fiterSeacrFood().length > 0 ? (
        <FlatList
          data={fiterSeacrFood()}
          renderItem={({ item }) => {
            return (
              <FoodItems
                key={item.name}
                foods={item}
                onClick={() => {
                  alert(`You choose name item: ${food.name}`);
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 0 }}>No Food Found</Text>
        </View>
      )}
    </View>
  );
};
export default FoodList;
