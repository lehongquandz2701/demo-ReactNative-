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
import { useState, useEffect } from "react";
import {
  user as UserRepository,
  population as PopulationRepository,
} from "../../repositer";
const screenWidth = Dimensions.get("window").width;
import { ConvertDateTimeToString } from "../../ultil/DateTime";
import { LineChart, BarChart, PieChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [populations, setPopulation] = useState([]);
  useEffect(() => {
    UserRepository.getUserDetail().then((responsUser) => setUser(responsUser));
    PopulationRepository.getPopulation({
      drilldown: "Nation",
      measures: "Population",
    }).then((responsPopulation) => setPopulation(responsPopulation));
  }, []);
  const {
    email,
    gender,
    id,
    address,
    UserName,
    phone,
    Url,
    registerDate,
    dateOfBirth,
  } = user;
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ width: 150, height: 150, borderRadius: 100 }}
          source={{ uri: Url }}
        ></Image>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>UserName: </Text>
        <Text style={{}}>{UserName}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Email: </Text>
        <Text style={{}}>{email}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>birth day: </Text>
        <Text style={{}}>{ConvertDateTimeToString(dateOfBirth)}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>gender: </Text>
        <Text style={{}}>{gender}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>address: </Text>
        <Text style={{}}>{address}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Phone: </Text>
        <Text style={{}}>{phone}</Text>
      </View>
      <View>
        <LineChart
          data={{
            labels: populations
              .sort((a, b) => parseInt(a.year) - parseInt(b.year))
              .map((item) => item.year),
            datasets: [
              {
                data: populations
                  .sort((a, b) => parseInt(a.year) - parseInt(b.year))
                  .map((item) => Math.floor(item.population / 1000_000, 0)),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: ["Population/Year"], // optional
          }}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          bezier
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
