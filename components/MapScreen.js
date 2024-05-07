import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from "react-native-maps";
import * as Location from "expo-location";

const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapScreen = () => {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    const fetchCurrentPosition = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      } catch (error) {
        alert(error.message);
      }
    };

    fetchCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      {currentRegion ? (
        <MapView style={styles.map} initialRegion={currentRegion}>
          <Marker
            coordinate={{
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude,
            }}
            title="Marker Title"
            description="Marker Description"
            pinColor="yellow"
          />
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
