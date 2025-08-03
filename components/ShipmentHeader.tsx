import { Shipment } from "@/utils/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ActionButtons from "./ActionButtons";
import AppCheckbox from "./AppCheckbox";

interface ShipmentsHeaderProps {
  onMarkAllPress: () => void;
  filteredShipments: Shipment[];
  onFilterPress: () => void;
  selectedFilterCount: number;
  selected: string[];
}

const ShipmentsHeader: React.FC<ShipmentsHeaderProps> = ({
  onMarkAllPress,
  filteredShipments,
  onFilterPress,
  selectedFilterCount,
  selected,
}) => {
  const isAllSelected =
    selected.length === filteredShipments.length &&
    filteredShipments.length > 0;

  return (
    <View className="py-1">
      <ActionButtons
        onFilterPress={onFilterPress}
        selectedFiltersCount={selectedFilterCount}
      />

      <View className="flex-row justify-between items-center mt-2">
        <Text className="font-semibold text-gray-900 text-lg">
          Shipments ({filteredShipments.length})
        </Text>

        <TouchableOpacity
          className="flex-row gap-2 items-center"
          onPress={onMarkAllPress}
        >
          <AppCheckbox isSelected={isAllSelected} toggle={onMarkAllPress} />
          <Text className="text-blue-600 font-medium">Mark All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShipmentsHeader;
