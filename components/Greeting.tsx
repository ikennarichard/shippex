import React from "react";
import { Text, View } from "react-native";

export default function Greeting() {
  return (
    <View className="mb-3">
      <Text className="text-gray-600 text-sm font-regular">Hello,</Text>
      <Text className="font-semibold text-gray-900 text-2xl">
        Ibrahim Shaker
      </Text>
    </View>
  );
}
