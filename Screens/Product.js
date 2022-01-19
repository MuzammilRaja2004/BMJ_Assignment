import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import Searchbar from "./Searchbar";
import { pdtData } from "./HomeData";
import AddToCart from './AddToCart'
const Product = ({navigation}) => {
  return (
    <View>
      <Searchbar />
      <TouchableOpacity activeOpacity={0.9}>
        <ScrollView>
          <View>
            {pdtData.map((items, index) => {
              return (
                <View key={index} style={styles.productsContainer}>
                  <View
                    style={[
                      styles.innerProducts,
                      styles[`innerProducts${index}`],
                    ]}
                  >
                    <View>
                      <Image
                        source={items.image}
                        style={{
                          width: 200,
                          height: 150,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{ fontSize: 25, color: "white", marginTop: 15 }}
                      >
                        {items.Text}
                      </Text>
                      <Text style={{ fontSize: 25, color: "white" }}>
                        {items.Price}
                      </Text>
                      <TouchableOpacity onPress={() => navigation.navigate('AddToCart')}>
                        <Text style={{color:'white',}}>Add To Cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  innerProducts: {
    backgroundColor: "#00b761",
    height: 150,
    flexDirection: "row",
    marginTop: 10,
    // borderRadius:5,
  },
  innerProducts3: {
    marginBottom: "30%",
  },
});

import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import Searchbar from "./Searchbar";
import { pdtData } from "./HomeData";

const Product = () => {
  return (
    <View>
      <Searchbar />
      <View>
        <ScrollView>
          {pdtData.map((items, index) => {
            return (
              <View key={index} style={[styles.products,styles[`products${index}`]]}>
                <Image
                  source={items.image}
                  style={{ width: 300, height: 300, resizeMode: "contain" }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});

