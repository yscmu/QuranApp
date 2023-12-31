// SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for the splash screen
    const timeout = setTimeout(() => {
      // Navigate to the HomeScreen after the delay
      navigation.replace("MyOnBoardingScreen");
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Replace 'your_logo.png' with the actual file path or URL of your app's logo */}
      <Image source={require("./img/book.jpeg")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2cc",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
