import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";

import Preload from "../../../assets/imgs/preloadLogo.png";

export default () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 2000);
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token != null) {
          navigation.navigate("MainTab");
          console.log(token);
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Preload}/>
      <ActivityIndicator style={styles.loadingIcon} size='large' color='#fff' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#577696",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 206,
    height: 60,
  },
  loadingIcon: {
    marginTop: 50,
  },
});
