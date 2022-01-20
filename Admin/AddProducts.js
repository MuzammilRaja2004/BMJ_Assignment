import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import db from "../Firebase/Config";
// Get Link From Firebase
import { doc, setDoc } from "firebase/firestore";

// Get Link From Firebase

const AddProducts = () => {
  const [nameChange, setnameChange] = useState("");
  const [typeChange, settypeChange] = useState("");
  const [detailsChange, setdetailsChange] = useState("");
  const [priceChange, setpriceChange] = useState("");

  // Function Get From Firebase
  const SubmitData = () => {
    // console.log(stateChange1, stateChange2, stateChange3, stateChange4);
    setDoc(doc(db, "users", user.uid), {
      nameChange,
      typeChange,
      detailsChange,
      priceChange,
    }).then(() => {
      console.log(user.uid); 
      console.log("SuccessFull");
    });
  };

  // Expo Image Picker Code
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.main_view}>
        <View style={styles.inner_view}>
          <View>
            <TextInput
              placeholder="Name"
              id="names"
              onChangeText={(text) => setnameChange(text)}
              style={styles.inputs}
            />
          </View>
          <View>
            <TextInput
              placeholder="Type"
              id="type"
              onChangeText={(text) => settypeChange(text)}
              style={styles.inputs}
            />
          </View>
          <View>
            <TextInput
              placeholder="Detail"
              id="details"
              onChangeText={(text) => setdetailsChange(text)}
              style={styles.inputs}
            />
          </View>
          <View>
            <TextInput
              placeholder="Price"
              id="price"
              onChangeText={(text) => setpriceChange(text)}
              style={styles.inputs}
            />
          </View>

          {/* Expo Image Picker */}

          <View>
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, marginTop: 10 }}
              />
            )}
          </View>

          {/* My Code */}

          <TouchableOpacity onPress={SubmitData}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProducts;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: "#0be881",
    height: "100%",
  },
  inner_view: {
    backgroundColor: "white",
    height: "90%",
    marginTop: "15%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  inputs: {
    backgroundColor: "#ECECEC",
    marginBottom: 20,
    fontSize: 18,
    padding: 6,
    borderRadius: 3,
  },
});
