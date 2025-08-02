import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { height: screenHeight } = Dimensions.get("window");

const statusOptions = [
  { label: "Received", value: "RECEIVED", color: "bg-blue-100 text-blue-800" },
  {
    label: "Putaway",
    value: "PUTAWAY",
    color: "bg-purple-100 text-purple-800",
  },
  {
    label: "Delivered",
    value: "DELIVERED",
    color: "bg-green-100 text-green-800",
  },
  { label: "Cancelled", value: "CANCELLED", color: "bg-red-100 text-red-800" },
  { label: "Rejected", value: "REJECTED", color: "bg-gray-100 text-gray-800" },
  { label: "Lost", value: "LOST", color: "bg-orange-100 text-orange-800" },
  {
    label: "On Hold",
    value: "ON_HOLD",
    color: "bg-indigo-100 text-indigo-800",
  },
];

const FilterModal = ({
  visible,
  onClose,
  selectedStatuses,
  onToggleStatus,
  onClearFilters,
  onApplyFilters,
}) => {
  const [slideAnim] = useState(new Animated.Value(screenHeight));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
    },
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        slideAnim.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 100) {
        closeModal();
      } else {
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const openModal = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  React.useEffect(() => {
    if (visible) {
      openModal();
    }
  }, [visible]);

  const handleApply = () => {
    onApplyFilters();
    closeModal();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={closeModal}
    >
      <View
        className="flex-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <TouchableOpacity
          className="flex-1"
          onPress={closeModal}
          activeOpacity={1}
        />

        <Animated.View
          style={{ transform: [{ translateY: slideAnim }] }}
          className="bg-white rounded-t-3xl"
          {...panResponder.panHandlers}
        >
          {/* Handle bar */}
          <View className="items-center py-3">
            <View className="w-12 h-1 bg-gray-300 rounded-full" />
          </View>

          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-4 pb-4 border-b border-gray-200">
            <TouchableOpacity onPress={closeModal}>
              <Text className="text-primary-light font-medium text-base">
                Cancel
              </Text>
            </TouchableOpacity>
            <Text className="font-semibold text-gray-900 text-lg">Filters</Text>
            <TouchableOpacity onPress={handleApply}>
              <Text className="text-primary-light font-medium text-base">
                Done
              </Text>
            </TouchableOpacity>
          </View>

          {/* Filter Content */}
          <View className="px-4 py-6">
            <Text className=" text-gray-600 text-base mb-4">
              SHIPMENT STATUS
            </Text>

            <View className="flex-row flex-wrap gap-2 mb-6">
              {statusOptions.map((status) => (
                <FilterChip
                  key={status.value}
                  label={status.label}
                  isSelected={selectedStatuses.includes(status.value)}
                  onPress={() => onToggleStatus(status.value)}
                />
              ))}
            </View>

            <Pressable
              onPress={onClearFilters}
              disabled={selectedStatuses.length < 1}
              className="items-center py-3"
            >
              <Text className="text-red-600 font-medium">
                Clear All Filters
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const FilterChip = ({ label, isSelected, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`px-4 py-3 rounded-lg ${
      isSelected ? "bg-blue-600 border-primary-light" : "bg-gray-100"
    }`}
  >
    <Text className={`font-light ${isSelected ? "text-white" : "text-black"}`}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default FilterModal;
