import { Image, ImageSourcePropType, View } from "react-native";

type TabIconProps = {
  focused: boolean;
  source: ImageSourcePropType;
};

export function TabIcon({ focused, source }: TabIconProps) {
  return (
    <View className="flex flex-row items-center justify-center rounded-full pb-8">
      <View
        className={`items-center justify-center rounded-full w-12 h-12  ${focused && "bg-general-400"}`}
      >
        <Image
          source={source}
          tintColor="white"
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </View>
  );
}
