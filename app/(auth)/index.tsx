import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoText from "../../assets/images/logo-text.svg";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-primary justify-center items-center">
        <LogoText className="w-52" resizeMode="contain" />
        <TouchableOpacity
          className="w-11/12 max-w-96 absolute bottom-14 rounded-lg h-14 bg-white justify-center"
          onPress={() => router.navigate("/(auth)/login")}
        >
          <Text className="text-center color-primary font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
