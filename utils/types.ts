export type ShipmentStatus =
  | "RECEIVED"
  | "PUTAWAY"
  | "DELIVERED"
  | "CANCELLED"
  | "REJECTED"
  | "LOST"
  | "ON_HOLD";

export type Shipment = {
  id: string;
  trackingNumber: string;
  carrier: string;
  origin: string;
  destination: string;
  status: ShipmentStatus
};

