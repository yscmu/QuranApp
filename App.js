// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import SurahScreen from "./src/Screens/SurahScreen";
import SearchSurah from "./src/Screens/SearchSurah";
import { LogBox } from "react-native";
import FullSurahScreen from "./src/Screens/FullSurahScreen";
//import SearchTranslation from "./src/Screens/SearchTranslation";
//import TranslationScreen from "./src/Screens/TranslationScreen";
//import FullTranslationScreen from "./src/Screens/FullTranslationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import MyOnBoardingScreen from "./src/Screens/MyOnBoardingScreen";
import SplashScreen from "./src/Screens/SplashScreen";
const Stack = createStackNavigator();

function App() {
  LogBox.ignoreLogs(["Warning: ..."]);

  // Ignore all logs that match the provided regular expression
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyOnBoardingScreen"
          component={MyOnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SurahList"
          component={SurahScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullSurahScreen"
          component={FullSurahScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchSurah"
          component={SearchSurah}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="SplashScreen">
  // <Stack.Screen
  //   name="MyOnBoardingScreen"
  //   component={MyOnBoardingScreen}
  //   options={{ headerShown: false }}
  // />
  //     </Stack.Navigator>
  // <Stack.Screen
  //   name="HomeScreen"
  //   component={HomeScreen}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="SurahList"
  //   component={SurahScreen}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="SearchSurah"
  //   component={SearchSurah}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="TranslationScreen"
  //   component={TranslationScreen}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="SearchTranslation"
  //   component={SearchTranslation}
  //   options={{ headerShown: false }}
  // />
  //     <Stack.Screen
  //       name="FullSurahScreen"
  //       component={FullSurahScreen}
  //       options={{ headerShown: false }}
  //     />
  // <Stack.Screen
  //   name="FullTranslationScreen"
  //   component={FullTranslationScreen}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="LoginScreen"
  //   component={LoginScreen}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="RegisterScreen"
  //   component={RegisterScreen}
  //   options={{ headerShown: false }}
  // />
  // <Stack.Screen
  //   name="SplashScreen"
  //   component={SplashScreen}
  //   options={{ headerShown: false }}
  // />
  //   </NavigationContainer>
  // );
}

export default App;
