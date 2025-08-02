import EmptyState from "@/components/EmptyState";
import FilterModal from "@/components/FilterModal";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ShipmentsHeader from "@/components/ShipmentHeader";
import ShipmentItem from "@/components/ShipmentItem";
import { Colors } from "@/constants/Colors";
import useShipment from "@/utils/hooks/useShipment";
import React, { useCallback, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  RefreshControl,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height: screenHeight } = Dimensions.get("window");

const ShipmentScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [slideAnim] = useState(new Animated.Value(5));
  const { filteredShipments, setShipments } = useShipment({
    searchText,
    selectedStatuses,
  });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const isSelected = (id: string) => selectedItems.includes(id);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredShipments.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredShipments.map((item) => item.id));
    }
  };

  const openFilterModal = () => {
    setShowFilterModal(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeFilterModal = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowFilterModal(false);
    });
  };

  const toggleStatusFilter = (status: any) => {
    setSelectedStatuses((prev: any) =>
      prev.includes(status)
        ? prev.filter((s: any) => s !== status)
        : [...prev, status]
    );
  };

  const clearFilters = () => {
    setSelectedStatuses([]);
  };

  const applyFilters = () => {
    closeFilterModal();
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      const newShipment = {
        id: Date.now().toString(),
        trackingNumber: `${Math.floor(Math.random() * 90000000000) + 10000000000}`,
        carrier: "UPS",
        origin: "Cairo",
        destination: "Luxor",
        status: "RECEIVED",
        statusColor: "text-blue-600",
        bgColor: "bg-blue-50",
      };

      setShipments((prevShipments) => [newShipment, ...prevShipments]);
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderShipmentItem = ({ item }: { item: any }) => (
    <ShipmentItem
      item={item}
      onPress={() => toggleItem(item.id)}
      isSelected={isSelected(item.id)}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-4">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <Header />
      <Greeting />
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />

      <ShipmentsHeader
        count={filteredShipments.length}
        filteredShipments={filteredShipments}
        onFilterPress={openFilterModal}
        selectedFilterCount={selectedStatuses.length}
        onMarkAllPress={toggleSelectAll}
        selected={selectedItems}
      />
      <FlatList
        data={filteredShipments}
        renderItem={renderShipmentItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <EmptyState
            searchText={searchText}
            hasFilters={selectedStatuses.length > 0}
          />
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.primary]}
            tintColor={Colors.primary}
            title="Pull to refresh"
            titleColor={Colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
      />

      <FilterModal
        visible={showFilterModal}
        onClose={closeFilterModal}
        selectedStatuses={selectedStatuses}
        onToggleStatus={toggleStatusFilter}
        onClearFilters={clearFilters}
        onApplyFilters={applyFilters}
      />
    </SafeAreaView>
  );
};

export default ShipmentScreen;
