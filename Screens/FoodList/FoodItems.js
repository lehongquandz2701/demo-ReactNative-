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
  Linking,
} from "react-native";
import React from "react";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isValidEmail, isValidPassWord } from "../../Validation";
import SaveColor from "../../color/SaveColor";
const handlechangStateColor = (status) => {
  if (status.trim() === "Comming soon") {
    return SaveColor.warning;
  } else if (status.trim() === "Opening soon") {
    return SaveColor.succes;
  } else if (status.trim() === "Closing soon") {
    return SaveColor.errors;
  }
  return SaveColor.succes;
};
const FoodItems = (props) => {
  const { name, url, status, website, socialNetworks, price } = props.foods;
  const { onClick } = props;
  return (
    <TouchableOpacity onPress={onClick} style={{ flex: 1, marginTop: 10 }}>
      <View
        style={{
          height: 150,
          flexDirection: "row",
          paddingTop: 20,
          paddingLeft: 10,
          marginRight: 1,
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: "cover",
            borderRadius: 20,
            marginTop: 5,
          }}
          source={{
            uri: url,
          }}
        ></Image>
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{name}</Text>
          <View style={{ height: 1, backgroundColor: "#000" }}></View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, color: "#111" }}>Status: </Text>
            <Text
              style={{ fontSize: 16, color: handlechangStateColor(status) }}
            >
              {status}
            </Text>
          </View>
          <Text style={{ fontSize: 16, color: "#111" }}>Price: {price} $ </Text>
          <Text style={{ fontSize: 16, color: "#111" }}>Food Type: Pizza </Text>
          <Text style={{ fontSize: 14, color: "#111" }}>
            Website: {website}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
            }}
          >
            {socialNetworks["facebook"] != undefined ? (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(socialNetworks.facebook);
                }}
              >
                <Image
                  style={{ width: 20, height: 20, marginRight: 10 }}
                  source={require("../../assets/facebook.png")}
                />
              </TouchableOpacity>
            ) : null}
            {socialNetworks["instagram"] != undefined ? (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(socialNetworks.instagram);
                }}
              >
                <Image
                  style={{ width: 20, height: 20, marginRight: 10 }}
                  source={require("../../assets/instagram.png")}
                />
              </TouchableOpacity>
            ) : null}
            {socialNetworks["twitter"] != undefined ? (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(socialNetworks.twitter);
                }}
              >
                <Image
                  style={{ width: 20, height: 20, marginRight: 10 }}
                  source={require("../../assets/twitter.png")}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FoodItems;
