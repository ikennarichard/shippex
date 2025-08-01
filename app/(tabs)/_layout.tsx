import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useFocusEffect, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";

const ICON_SIZE = 24;

type IconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

const TabBarIcon = ({ name, color }: IconProps) => (
  <FontAwesome
    name={name}
    size={ICON_SIZE}
    color={color}
    style={styles.tabIcon}
  />
);

export default function TabLayout() {
  const { user } = useAuth();
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      if (!user) {
        router.replace("/(auth)");
      }
      return () => {};
    }, [])
  );
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#B0AAC0",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Shipments",
          tabBarIcon: ({ color }) => <TabBarIcon name="cube" color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="barcode" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="credit-card" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    marginBottom: -3,
  },
});
