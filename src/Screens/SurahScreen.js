import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SurahScreen = ({ navigation, route }) => {
  const { surahs } = route.params || {};
  const navigateToFullSurah = (surahId) => {
    navigation.navigate("FullSurahScreen", { selectedSurahId: surahId });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff2cc", padding: 16 }}>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
        Surahs
      </Text>
      <View style={{ marginBottom: 40 }}></View>

      {/* Display the list of surahs */}
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToFullSurah(item.number)}>
            <View style={{ marginVertical: 8 }}>
              <Text style={{ color: "black" }}>{item.englishName}</Text>
              <View style={styles.separator}></View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
});
export default SurahScreen;
