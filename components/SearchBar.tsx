import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

const SearchBar = ({ searchText, onSearchChange }) => (
  <View className="relative mb-4">
    <View className="flex-row items-center bg-gray-100 rounded-[10] px-3 h-14">
      <Ionicons name="search" size={20} color="#A7A3B3" />
      <TextInput
        className="flex-1 ml-2 text-gray-900 font-regular"
        placeholder="Search"
        placeholderTextColor="#A7A3B3"
        value={searchText}
        onChangeText={onSearchChange}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={() => onSearchChange("")}>
          <Ionicons name="close-circle" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default SearchBar;
