// SearchScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchSurah = ({ navigation, route }) => {
  const { surahs } = route.params || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState([]);

  const handleSearch = (text) => {
    const filtered = surahs.filter((surah) =>
      surah.englishName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSurahs(filtered);
  };
  const navigateToFullSurah = (surahId) => {
    navigation.navigate("FullSurahScreen", { selectedSurahId: surahId });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff2cc", padding: 16 }}>
      <Text style={{ color: "black", fontSize: 20 }}>Search Surahs</Text>

      {/* Search Bar */}
      <TextInput
        style={{
          height: 40,
          borderColor: "white",
          borderWidth: 1,
          backgroundColor: "#fff",
          paddingHorizontal: 8,
          color: "black",
          marginBottom: 16,
        }}
        placeholder="Search Surah"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
      />

      {/* Display matching surah names */}
      <FlatList
        data={filteredSurahs}
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

export default SearchSurah;
