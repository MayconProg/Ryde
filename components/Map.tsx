import { Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

export function Map() {
  return (
    <MapView
      className="w-full h-full rounded-2xl"
      style={{ width: 350, height: 300 }}
      provider={PROVIDER_DEFAULT}
      tintColor="black"
      mapType="hybrid"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
}
