import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "black" : "gray";

  return (
    <View
      style={{
        height: 5,
        width: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12,
    }}
    {...props}
  >
    <Text style={{ color: "black" }}>Done</Text>
  </TouchableOpacity>
);

const MyOnBoardingScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <Onboarding
      onSkip={() => navigation.navigate("LoginScreen")}
      onDone={() => navigation.navigate("LoginScreen")}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      bottomBarColor="#b8860b"
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("./img/signup.png")}
              style={[styles.image, { width, resizeMode: "contain" }]}
            />
          ),
          title: "Signup or Login ",
          subtitle: " Create your account",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("./img/quran.jpg")}
              style={[styles.image, { width, resizeMode: "contain" }]}
            />
          ),
          title: "Read Quran",
          subtitle: "Read quran by choosing any surah ",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flexDirection: "row",
    width: "50%",
    marginTop: 90,
    marginRight: 10,
    height: 200,
  },
});
export default MyOnBoardingScreen;
