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
} from "react-native";
import React from "react";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isValidEmail, isValidPassWord } from "../../Validation";
const FormLogin = (props) => {
  const { height } = Dimensions.get("window");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const isValidCheck = () =>
    Email.length > 0 &&
    Password.length > 0 &&
    isValidEmail(Email) === true &&
    isValidPassWord(Password) == true;
  const { navigation, route } = props;
  // funtione Navigate
  const { navigate, goBack } = navigation;
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ height }}
      resetScrollToCoords={{ x: 10, y: 0 }}
      style={{
        flex: 100,
        marginTop: StatusBar.currentHeight || 0,
        paddingBottom: 100,
      }}
    >
      <ImageBackground
        source={require("../../assets/background.png")}
        style={{ flex: 100 }}
      >
        <SafeAreaView
          style={{
            flex: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 30, color: "#fff", fontWeight: "700" }}>
            Already{"\n"}have an{"\n"}Account?
          </Text>
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
            source={require("../../assets/bghhh.png")}
          />
        </SafeAreaView>
        <View
          style={{
            flex: 50,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <View style={{ marginHorizontal: 35, marginTop: 25 }}>
            <View>
              <Text
                style={{ fontSize: 20, color: "purple", fontWeight: "500" }}
              >
                Email:
              </Text>
              <TextInput
                onChangeText={(e) => {
                  setErrorEmail(
                    isValidEmail(e) === true
                      ? ""
                      : "Email not in correct format!"
                  );
                  setEmail(e);
                }}
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  fontSize: 20,
                  fontWeight: "500",
                  paddingVertical: 10,
                  underlineColorAndroid: "transparent",
                }}
                placeholder="example@gmail.com"
                placeholderTextColor="#ccc"
              />
              <View
                style={{ width: "100%", backgroundColor: "purple", height: 1 }}
              ></View>
              <Text style={{ fontSize: 15, color: "red" }}>{errorEmail}</Text>
            </View>
            <View style={{ paddingTop: 10 }}>
              <Text
                style={{ fontSize: 20, color: "purple", fontWeight: "500" }}
              >
                Password:
              </Text>
              <TextInput
                secureTextEntry={true}
                onChangeText={(e) => {
                  setErrorPassword(
                    isValidPassWord(e) === true
                      ? ""
                      : "Password must have at least 6 characters "
                  );
                  setPassword(e);
                }}
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  fontSize: 20,
                  fontWeight: "500",
                  paddingVertical: 10,
                  underlineColorAndroid: "transparent",
                }}
                placeholder="Emter Your Password"
                placeholderTextColor="#ccc"
              />
              <View
                style={{ width: "100%", backgroundColor: "purple", height: 1 }}
              ></View>
              <Text style={{ fontSize: 15, color: "red" }}>
                {errorPassword}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <TouchableOpacity
              disabled={isValidCheck() === false}
              onPress={() => {
                return navigate("UiTabs");
              }}
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "yellow",
                backgroundColor: isValidCheck() === false ? "#999" : "#ff6633",
                opacity: 0.9,
                padding: 10,
                margin: 10,
                width: 250,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 15, color: "#000" }}>
              New user? Register now
            </Text>
          </View>
        </View>
        <View style={{ flex: 20, alignItems: "center" }}>
          <View>
            <View
              style={{
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                Use Other Method
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/fb.png")}
            ></Image>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/instar.png")}
            ></Image>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default FormLogin;
