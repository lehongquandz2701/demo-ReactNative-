import { faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ButtonUi } from "../component";
import BtnNext from "../component/BtnNext";
const promist = [
  {
    id: 1,
    title: "Influcer",
  },
  {
    id: 2,
    title: "Busness",
  },
  {
    id: 3,
    title: "Invadial",
  },
];
const Welcome = (props) => {
  const [check, setisChecked] = useState();
  const { navigation, route } = props;
  // funtione Navigate
  const { navigate, goBack } = navigation;
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 100 }}>
      <View
        style={{
          flex: 10,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../assets/fire.png")}
        />
        <Text
          style={{
            width: "80%",
            fontSize: 20,
            fontWeight: "500",
            color: "#fff",
            paddingLeft: 15,
          }}
        >
          InClucke.com
        </Text>
        <FontAwesome5
          style={{
            position: "absolute",
            top: 30,
            right: 10,
          }}
          name="info-circle"
          color={"#99ccff"}
          size={15}
        />
      </View>
      <View
        style={{ flex: 30, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ opacity: 0.6, color: "#fff", fontSize: 16 }}>
          Welcome to
        </Text>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>
          Inclucke.com
        </Text>
        <Text style={{ opacity: 0.6, color: "#fff", fontSize: 16 }}>
          Please select your account type to use!
        </Text>
      </View>
      <View style={{ marginHorizontal: 10, flex: 40 }}>
        {promist.map((curr, index) => {
          return (
            <ButtonUi
              key={index}
              isChecked={curr.id === check}
              name={curr.title}
              onPress={() => setisChecked(curr.id)}
            ></ButtonUi>
          );
        })}
      </View>
      <View style={{ flex: 20, marginHorizontal: 10 }}>
        <TouchableOpacity
          onPress={() => {
            return navigate("FormLogin");
          }}
          style={{
            width: "100%",
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
              color: "#99ccff",
              fontSize: 20,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ color: "#fff" }}>
            Don't know what account type to use?
          </Text>
          <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
            Register!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
