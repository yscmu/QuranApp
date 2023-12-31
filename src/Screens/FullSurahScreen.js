// FullSurahScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const FullSurahScreen = ({ navigation, route }) => {
  const { selectedSurahId } = route.params || {};
  const [fullSurah, setFullSurah] = useState(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await fetch(
          `http://api.alquran.cloud/v1/surah/${selectedSurahId}`
        );
        const data = await response.json();

        if (
          response.ok &&
          data &&
          data.code === 200 &&
          data.data &&
          data.data.ayahs
        ) {
          setFullSurah(data.data);
        } else {
          console.error("Invalid API response structure:");
        }
      } catch (error) {
        console.error("Error fetching surah:", error);
      }
    };

    fetchSurah();
  }, [selectedSurahId]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {fullSurah ? (
          <View>
            <Text style={[styles.title, { marginBottom: 30, marginTop: 20 }]}>
              {fullSurah.name}
            </Text>
            <View style={styles.separator}></View>

            <Text style={styles.text}>
              {fullSurah.ayahs.map((ayah) => ayah.text + "\n\n")}
            </Text>
          </View>
        ) : (
          <Text style={styles.loading}>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2cc",
    padding: 16,
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  loading: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  separator: {
    borderBottomColor: "gray",
    // borderBottomWidth: 1,
    // marginVertical: 8,
    height: 1,
    borderTopWidth: 3,
    width: "30%",
    marginLeft: 200,
    marginBottom: 40,
  },
});

export default FullSurahScreen;
