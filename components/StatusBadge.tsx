import { getStatusStyles } from "@/utils";
import { Text, View } from "react-native";

const StatusBadge = ({ status }) => {
  const { statusColor, bgColor } = getStatusStyles(status);
  return (
    <View
      className={`flex-row items-center py-1 px-1 border-gray-50 rounded-sm ${bgColor}`}
    >
      <Text className={`font-regular text-xs ${statusColor}`}>
        {status.replace("_", " ")}
      </Text>
    </View>
  );
};

export default StatusBadge;
