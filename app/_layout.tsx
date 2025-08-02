import WelcomeScreen from "@/components/WelcomeScreen";
import { AuthProvider } from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.setOptions({
  fade: true,
  duration: 600,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SFPro_Regular: require("../assets/fonts/SF-Pro.ttf"),
    SFPro_Bold: require("../assets/fonts/SF-Pro-Text-Bold.otf"),
    SFPro_Semibold: require("../assets/fonts/SF-Pro-Text-Semibold.otf"),
    SFPro_Light: require("../assets/fonts/SF-Pro-Text-Light.otf"),
  });

  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    }
  }, [loaded]);

  if (!loaded || !animationDone) {
    return loaded ? (
      <WelcomeScreen onFinish={() => setAnimationDone(true)} />
    ) : null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
