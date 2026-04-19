import React from "react";
import { View, Text } from "react-native";
import { ScrollSelector } from "../../../components/ScrollSelector";

interface AgeSelectorProps {
  age: number;
  handleAgeChange: (age: number) => void;
}

export const AgeSelector: React.FC<AgeSelectorProps> = ({ age, handleAgeChange }) => (
  <View className="gap-y-4">
    <Text className="font-headline text-lg font-bold text-on-surface px-1">
      How old are you?
    </Text>
    <View className="bg-surface-container-low rounded-3xl overflow-hidden shadow-inner">
      <ScrollSelector
        min={10}
        max={100}
        initialValue={age}
        onValueChange={handleAgeChange}
        orientation="vertical"
        containerSize={220}
        itemSize={70}
        measureLines={false}
      />
    </View>
  </View>
);
