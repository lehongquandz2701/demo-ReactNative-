import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabledFinger, setIsEnabledFinger] = useState(false);
  const toggleSwitchFinger = () =>
    setIsEnabledFinger((previousState) => !previousState);
  const [isEnabledPass, setIsEnabledPass] = useState(false);
  const toggleSwitchPass = () =>
    setIsEnabledPass((previousState) => !previousState);
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          backgroundColor: "#eeeeee",
        }}
      >
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View
          style={{
            height: 60,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            position: "",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Settings
          </Text>
        </View>
        <View style={{}}>
          <View style={{ height: 50, marginHorizontal: 20 }}>
            <Text
              style={{
                lineHeight: 50,
                fontSize: 20,
                color: "#999",
                fontWeight: "500",
              }}
            >
              Common
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 4,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="globe" size={30} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Language
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}>English</Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="cloud" size={25} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Envirionment
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}>
                  Production
                </Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
          </View>
        </View>

        <View style={{}}>
          <View style={{ height: 50, marginHorizontal: 20 }}>
            <Text
              style={{
                lineHeight: 50,
                fontSize: 20,
                color: "#999",
                fontWeight: "500",
              }}
            >
              Account
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 4,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="phone" size={30} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Phone number
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}></Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="envelope" size={25} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Email
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}></Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="door-open" size={25} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Sign out
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}></Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <View style={{ height: 50, marginHorizontal: 20 }}>
            <Text
              style={{
                lineHeight: 50,
                fontSize: 20,
                color: "#999",
                fontWeight: "500",
              }}
            >
              Security
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 4,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="lock" size={30} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Lock app in background
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "red" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="fingerprint" size={25} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Use fingerprint
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "red" }}
                thumbColor={isEnabledFinger ? "#fff" : "#f4f3f4"}
                onValueChange={toggleSwitchFinger}
                value={isEnabledFinger}
              />
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="unlock" size={25} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Change password
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "red" }}
                thumbColor={isEnabledPass ? "#fff" : "#f4f3f4"}
                onValueChange={toggleSwitchPass}
                value={isEnabledPass}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <View style={{ height: 50, marginHorizontal: 20 }}>
            <Text
              style={{
                lineHeight: 50,
                fontSize: 20,
                color: "#999",
                fontWeight: "500",
              }}
            >
              Misc
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 4,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="calendar" size={30} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Terms of service
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}></Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="book" size={25} color={"#777"} />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  Open source licenses
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, marginRight: 20 }}></Text>
                <FontAwesome5 name="angle-right" size={20} color={"#777"} />
              </View>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#ccc", height: 1, opacity: 0.2 }}
            ></View>
          </View>
        </View>
        <View style={{ height: 100 }}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Setting;
