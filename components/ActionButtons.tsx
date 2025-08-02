import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const ActionButtons = ({ onFilterPress, selectedFiltersCount }) => (
  <View className="flex-row justify-between items-center mb-6">
    <TouchableOpacity
      className="flex-row items-center justify-center bg-gray-100 px-4 py-2 rounded-lg w-2/5 max-w-44"
      onPress={onFilterPress}
    >
      <Ionicons name="filter" size={16} color="#00000" />
      <Text className="ml-2 text-gray-700 font-light">Filters</Text>
      {selectedFiltersCount > 0 && (
        <View className="ml-2 w-5 h-5 bg-blue-600 rounded-full items-center justify-center">
          <Text className="text-white text-xs font-bold font-regular">
            {selectedFiltersCount}
          </Text>
        </View>
      )}
    </TouchableOpacity>

    <TouchableOpacity className="flex-row justify-center items-center bg-primary-light px-4 py-2 rounded-lg w-2/5 max-w-44">
      <Ionicons name="scan" size={16} color="white" />
      <Text className="ml-2 text-white font-light">Add Scan</Text>
    </TouchableOpacity>
  </View>
);

export default ActionButtons;
