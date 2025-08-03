import { useMemo, useState } from "react";

export default function useShipment({searchText, selectedStatuses}) {
  const [shipments, setShipments] = useState(SHIPMENTS || []);

  const filteredShipments = useMemo(() => {
    return shipments.filter((shipment) => {
      const matchesSearch =
        shipment.trackingNumber
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        shipment.carrier.toLowerCase().includes(searchText.toLowerCase()) ||
        shipment.destination.toLowerCase().includes(searchText.toLowerCase()) ||
        shipment.status.toLowerCase().includes(searchText.toLowerCase());

      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(shipment.status);

      return matchesSearch && matchesStatus;
    });
  }, [searchText, selectedStatuses, shipments]);

  return { filteredShipments, shipments, setShipments };
}

export const SHIPMENTS = [
  {
    id: "1",
    trackingNumber: "41785691400",
    carrier: "DHL",
    origin: "Cairo",
    destination: "Giza",
    status: "RECEIVED",
  },
  {
    id: "2",
    trackingNumber: "41785691401",
    carrier: "AWB",
    origin: "Alexandria",
    destination: "Cairo",
    status: "PUTAWAY",
  },
  {
    id: "3",
    trackingNumber: "41785691402",
    carrier: "DHL",
    origin: "Cairo",
    destination: "Giza",
    status: "DELIVERED",
  },
  {
    id: "4",
    trackingNumber: "41785691403",
    carrier: "AWB",
    origin: "Alexandria",
    destination: "Giza",
    status: "CANCELLED",
  },
  {
    id: "5",
    trackingNumber: "41785691404",
    carrier: "DHL",
    origin: "Giza",
    destination: "Cairo",
    status: "REJECTED",
  },
  {
    id: "6",
    trackingNumber: "41785691405",
    carrier: "AWB",
    origin: "Cairo",
    destination: "Alexandria",
    status: "LOST",
  },
  {
    id: "7",
    trackingNumber: "41785691406",
    carrier: "DHL",
    origin: "Giza",
    destination: "Alexandria",
    status: "ON_HOLD",
  },
];
