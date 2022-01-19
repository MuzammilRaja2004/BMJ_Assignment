import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import { HomeData, CardData } from "./HomeData";
import Searchbar from "./Searchbar";
import Product from './Product'

const Home = ({navigation}) => {
  // const clickMe = (index) => {
  //   alert(index)
  // }
  
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Searchbar />

        {/* Create Categorise Section */}
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#00b761" }}
            >
              Categorise
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              {HomeData.map((item, index) => {
                return (
                  <View >
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Product")}
                    >
                      <View key={index}>
                        <Image
                          source={item.image}
                          style={{
                            height: 50,
                            width: 50,
                            marginLeft: 33,
                            marginBottom: 10,
                          }}
                        />
                      </View>

                      <View style={{ marginLeft: 33 }}>
                        <Text>{item.text}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* High Rated Products */}
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#00b761" }}
            >
              High Rate Products
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 20,
                  justifyContent: "space-between",
                }}
              >
                {CardData.map((items, index) => {
                  return (
                    <View
                    key={index}
                      style={[styles.helloo, styles[`hello${index}`]]}
                      
                    >
                      <Image
                        source={items.image}
                        style={{
                          width: 408,
                          height: 300,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  helloo: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0be881",
    marginRight: 32,
    borderRadius: 10,
  },

  hello1: {
    backgroundColor: "#e67e22",
  },
  hello2: {
    backgroundColor: "#f1c40f",
  },
  hello3: {
    backgroundColor: "#c0392b",
  },
});
