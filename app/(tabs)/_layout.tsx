import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";

const ICON_SIZE = 24;

type IconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

const TabBarIcon = ({ name, color }: IconProps) => (
  <FontAwesome name={name} size={ICON_SIZE} color={color} />
);

export default function TabLayout() {
  const windowHeight = Dimensions.get("window").height;
  const isSmallDevice = windowHeight < 700;
  const dynamicHeight = isSmallDevice ? 60 : 70;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#B0AAC0",
        tabBarStyle: {
          height: dynamicHeight,
          elevation: 0,
          paddingTop: 6,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "200",
          fontFamily: "SFPro_Regular",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Shipments",
          tabBarIcon: ({ color }) => <TabBarIcon name="cubes" color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="barcode-scan"
              size={ICON_SIZE}
              color={color}
            />
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
