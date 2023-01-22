import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {styles} from './styles'

export default function MapScreen  ({route})  {
  console.log("route.params", route.params.location);
  const [location, setLocation] = useState(null);



  useEffect(() => {
    if (route.params) {
      const coords = {
        latitude: route.params.location.latitude,
        longitude: route.params.location.longitude,
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



