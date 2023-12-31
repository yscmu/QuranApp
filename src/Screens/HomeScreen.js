// HomeScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { auth, db } from "./firebase";

// Replace 'your_logo.png' with the actual file path or URL of your app's logo
//const AppLogo = require('./logo.png');

const HomeScreen = ({ navigation, route }) => {
  const [surahs, setSurahs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    // Placeholder for fetching surahs from the API
    const fetchSurahs = async () => {
      try {
        const response = await fetch(
          "http://api.alquran.cloud/v1/quran/quran-uthmani"
        ); // Replace with your API endpoint
        const data = await response.json();
        // Assuming data contains an array of surahs, update the state
        setSurahs(data.data.surahs);
      } catch (error) {
        console.error("Error fetching surahs:", error);
      }
    };

    // Call the fetchSurahs function when the component mounts
    fetchSurahs();
  }, []);
  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("logout");
      navigation.navigate("LoginScreen");
    });
  };

  return (
    <View style={styles.container}>
      {/* Display App Logo */}

      <View style={styles.settingsIcon}>
        <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
          <Icon name="gear" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* <DropDownPicker
        open={dropdownOpen}
        items={[{ label: "Logout", value: "logout" }]}
        setOpen={setDropdownOpen}
        setValue={(value) => {
          if (value === "logout") {
            handleLogout();
          }
        }}
        style={{ display: "none" }} // Initially hide the dropdown
      /> */}

      <View>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text
            style={[
              styles.button,
              { marginTop: 100, paddingHorizontal: 90, color: "white" },
            ]}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      {/* Navigation to Surah,search and Translation screens */}
      <View style={[styles.button, { marginTop: 100, paddingHorizontal: 90 }]}>
        <Button
          title="Surah"
          onPress={() => navigation.navigate("SurahList", { surahs })}
          color="black"
        />
      </View>
      <View style={styles.space} />
      <View style={[styles.button, { paddingHorizontal: 90 }]}>
        <Button
          title="Search"
          onPress={() => navigation.navigate("SearchSurah", { surahs })}
          color="black"
        />
      </View>
      <View style={styles.space} />
      {/* <View style={[styles.button, { paddingHorizontal: 105 }]}>
        <Button
          title="Translation"
          onPress={() => navigation.navigate("TranslationScreen", { surahs })}
          color="black"
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2cc",
    padding: 36,
    alignItems: "center",
    justifyContent: "center",
    //paddingTop: 100, // Adjust this value to leave empty space at the start
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 7,
    elevation: 2,
    marginBottom: 16,
    //marginTop:30,
    backgroundColor: "black",
  },

  space: {
    height: 16,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  settingsIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
export default HomeScreen;
