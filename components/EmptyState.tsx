import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const EmptyState = ({ searchText, hasFilters, text = "No shipments found" }) => (
  <View className="flex-1 items-center justify-center py-20">
    <Ionicons name="cube-outline" size={64} color="#9CA3AF" />
    <Text className="text-gray-500 text-lg mt-4">
      {text}
    </Text>
    <Text className="text-gray-400 text-sm mt-2">
      {searchText || hasFilters
        ? "Try adjusting your search or filters"
        : "Pull down to refresh"}
    </Text>
  </View>
);

export default EmptyState;
