import { Colors } from "@/constants/Colors";
import Checkbox from "expo-checkbox";
import React from "react";

export default function AppCheckbox({ isSelected, toggle }) {
  return (
    <Checkbox
      style={{
        width: 18,
        height: 18,
        borderColor: Colors.ritual_cyan,
        borderWidth: 1,
      }}
      value={isSelected}
      onValueChange={toggle}
      color={isSelected ? Colors.light : undefined}
    />
  );
}
