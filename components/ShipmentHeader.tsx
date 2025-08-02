import { Text, TouchableOpacity, View } from "react-native";
import ActionButtons from "./ActionButtons";
import AppCheckbox from "./AppCheckbox";

const ShipmentsHeader = ({
  count,
  onMarkAllPress,
  filteredShipments,
  onFilterPress,
  selectedFilterCount,
  selected,
}) => (
  <View className="py-1">
    <ActionButtons
      onFilterPress={onFilterPress}
      selectedFiltersCount={selectedFilterCount}
    />

    <View className="flex-row justify-between items-center">
      <Text className="font-semibold text-gray-900 text-lg">
        Shipments ({filteredShipments.length})
      </Text>
      <TouchableOpacity className="flex-row gap-2" onPress={onMarkAllPress}>
        <AppCheckbox
          isSelected={selected.length === filteredShipments.length}
          toggle={onMarkAllPress}
        />
        <Text className="text-blue-600 font-regular">Mark All</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ShipmentsHeader;
