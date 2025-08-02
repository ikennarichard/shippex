import { Colors } from "@/constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import Box from "../assets/images/box-1.svg";
import AppCheckbox from "./AppCheckbox";
import StatusBadge from "./StatusBadge";

const ShipmentItem = ({ item, onPress, isSelected }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="bg-gray-50 px-3 py-4 mt-2 rounded-lg shadow-sm">
        <View className="flex-row items-center justify-between gap-2">
          <View className="flex-row gap-2 items-center">
            <AppCheckbox isSelected={isSelected} toggle={onPress} />
            <Box />
          </View>
          <View className="flex-row items-center justify-between flex-1 gap-2 w-auto">
            <View>
              <Text className="font-semibold text-gray-900 text-base">
                {item.carrier}
              </Text>
              <Text className="font-bold text-gray-900 text-lg">
                {item.trackingNumber}
              </Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-gray-600 text-sm font-light">{item.origin}</Text>
                <Ionicons
                  name="arrow-forward"
                  size={12}
                  color={Colors.primary}
                  style={{ marginHorizontal: 4 }}
                />
                <Text className="text-gray-600 text-sm font-light">
                  {item.destination}
                </Text>
              </View>
            </View>
            <StatusBadge
              status={item.status}
              statusColor={item.statusColor}
              bgColor={item.bgColor}
            />
          </View>

          <View className="bg-white h-9 w-9 py-1 px-1 rounded-full justify-center items-center">
            <AntDesign
              name="arrowsalt"
              size={14}
              color={Colors.primary}
              style={{ marginHorizontal: 4 }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ShipmentItem;
