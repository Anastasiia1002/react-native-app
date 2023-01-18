import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";


export default function MapScreen  ({route})  {
  console.log("route.params", route.params);
  const [location, setLocation] = useState(null);



  useEffect(() => {
    if (route.params) {
      const coords = {
        latitude: route.params.location.coords.latitude,
        longitude: route.params.location.coords.longitude,
      };
      setLocation(coords);
     
    }
  }, [route.params.location]);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="The photo was taken here" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

