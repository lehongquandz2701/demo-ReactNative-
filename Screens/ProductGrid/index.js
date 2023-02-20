import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Product } from "../../DataList/index";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fivestar from "./Fivestar";
const ProductGrid = () => {
  const [saveColor, setSaveColor] = useState(Product);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        style={{ marginTop: 5 }}
        data={saveColor}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flex: 0.5,
                marginLeft: index % 2 == 0 ? 10 : 0,
                marginRight: 10,
                marginBottom: 5,
                marginTop: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "#999",
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  style={{
                    height: 90,
                    width: 70,
                    resizeMode: "cover",
                    borderRadius: 20,
                    marginTop: 5,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "600",
                    flex: 1,
                    textAlign: "right",
                    marginRight: 10,
                  }}
                >
                  $ {item.price}
                </Text>
              </View>
              <Text
                style={{
                  color: "#0066ff",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}
              >
                {item.productName}
              </Text>
              {item.specifications.map((specification, index) => {
                return (
                  <Text
                    style={{
                      fontSize: 15,
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                    }}
                    key={index}
                  >
                    * {specification}
                  </Text>
                );
              })}
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    const cloneProduct = Product.map((eachProduct) => {
                      if (eachProduct.productName == item.productName) {
                        eachProduct.isSaved =
                          eachProduct.isSaved == false ||
                          eachProduct.isSaved == undefined
                            ? true
                            : false;
                        return { ...eachProduct };
                      }
                      return eachProduct;
                    });
                    setSaveColor(cloneProduct);
                  }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5
                    style={{ marginEnd: 5, marginLeft: 10 }}
                    name="heart"
                    color={item.isSaved === true ? "red" : "#999"}
                    size={25}
                  />
                  <Text
                    style={{
                      color: item.isSaved === true ? "red" : "#999",
                      fontWeight: "500",
                      fontSize: 15 * 0.8,
                    }}
                  >
                    Save For{"\n"}Letter
                  </Text>
                </TouchableOpacity>
                <View style={{}}>
                  <View style={{ flexDirection: "row", marginLeft: 30 }}>
                    <Fivestar numberofstar={item.stars} />
                  </View>
                  <Text
                    style={{
                      color: "#3399ff",
                      textAlign: "right",
                      fontWeight: "500",
                      paddingVertical: 5,
                    }}
                  >
                    {item.reviews} reviews
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductGrid;
