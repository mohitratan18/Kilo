import React from "react";
import { View, Text } from "react-native";
import { ScrollSelector } from "../../../components/ScrollSelector";

interface HeightSelectorProps {
  height: number;
  handleHeightChange: (height: number) => void;
}

export const HeightSelector: React.FC<HeightSelectorProps> = ({ height, handleHeightChange }) => (
  <View className="gap-y-4">
    <Text className="font-headline text-lg font-bold text-on-surface px-1">
      Your Height
    </Text>
    <View className="bg-surface-container-low rounded-3xl overflow-hidden shadow-inner">
      <ScrollSelector
        min={100}
        max={250}
        initialValue={height}
        onValueChange={handleHeightChange}
        orientation="horizontal"
        itemSize={100}
        measureLines={true}
        unit="cm"
      />
    </View>
  </View>
);
