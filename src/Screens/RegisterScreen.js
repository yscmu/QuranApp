import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const register = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK" },
        ],
        { cancelable: false }
      );
    }

    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", "${myUserUid}"), {
          firstName: firstName,
          lastName: lastName,
          email: user,
        });
      }
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff2cc",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Register
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: "black",
              marginTop: 8,
              fontWeight: "600",
            }}
          >
            Create a new Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={{
                fontSize: firstName ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              placeholderTextColor="gray"
              style={{
                fontSize: lastName ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "black",
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="gray"
              style={{
                fontSize: email ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "black",
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="gray"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "black",
                marginLeft: 13,
                width: 300,
                marginVertical: 20,
              }}
            />
          </View>

          <Pressable
            onPress={register}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              borderRadius: 7,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "gray",
                fontWeight: "500",
              }}
            >
              Already have a account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
