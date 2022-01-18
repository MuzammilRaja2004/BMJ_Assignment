import React from "react";
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
