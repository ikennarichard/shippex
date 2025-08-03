import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import BlueLogoText from "../assets/images/blue-logo-text.svg";

const Header = () => (
  <View className="flex-row items-center justify-between mb-4 py-1">
    <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center mr-3">
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
        width={40}
        height={40}
        className="rounded-full"
      />
    </View>
    <BlueLogoText height={20} style={{marginTop: 8}} />
    <TouchableOpacity className="bg-ritual-100 rounded-full items-center justify-center h-10 w-10 mt-2">
      <Ionicons name="notifications-outline" size={24} color={Colors.primary} />
    </TouchableOpacity>
  </View>
);

export default Header;
