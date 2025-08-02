type ShipmentStatus =
  | "RECEIVED"
  | "PUTAWAY"
  | "DELIVERED"
  | "CANCELLED"
  | "REJECTED"
  | "LOST"
  | "ON_HOLD"
  | string;

export function getStatusStyles(status: ShipmentStatus) {
  switch (status) {
    case "RECEIVED":
      return {
        statusColor: "text-blue-800",
        bgColor: "bg-blue-100",
      };
    case "PUTAWAY":
      return {
        statusColor: "text-purple-800",
        bgColor: "bg-purple-100",
      };
    case "DELIVERED":
      return {
        statusColor: "text-green-800",
        bgColor: "bg-green-100",
      };
    case "CANCELLED":
      return {
        statusColor: "text-red-800",
        bgColor: "bg-red-100",
      };
    case "REJECTED":
      return {
        statusColor: "text-gray-800",
        bgColor: "bg-gray-100",
      };
    case "LOST":
      return {
        statusColor: "text-orange-800",
        bgColor: "bg-orange-100",
      };
    case "ON_HOLD":
      return {
        statusColor: "text-indigo-800",
        bgColor: "bg-indigo-100",
      };
    default:
      return {
        statusColor: "text-gray-800",
        bgColor: "bg-gray-100",
      };
  }
}
