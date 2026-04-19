import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface WeightInputProps {
  weight: number;
  handleWeightChange: (delta: number) => void;
}

export const WeightInput: React.FC<WeightInputProps> = ({ weight, handleWeightChange }) => {
  const [isWeightEditing, setIsWeightEditing] = useState(false);
  const [tempWeight, setTempWeight] = useState(weight.toString());

  return (
    <View className="gap-y-4">
      <Text className="font-headline text-lg font-bold text-on-surface px-1">
        Current Weight
      </Text>
      <View
        className="bg-surface-container-lowest rounded-3xl p-8 flex flex-row items-center justify-between shadow-sm border border-outline-variant/5"
        style={styles.cardShadow}
      >
        <TouchableOpacity
          onPress={() => handleWeightChange(-0.5)}
          className="w-14 h-14 rounded-full bg-surface-container-high items-center justify-center"
        >
          <MaterialIcons name="remove" size={28} color="#2c2f30" />
        </TouchableOpacity>

        <View className="flex-1 items-center justify-center flex-row gap-x-2">
          {isWeightEditing ? (
            <TextInput
              autoFocus
              keyboardType="decimal-pad"
              className="text-6xl font-headline font-extrabold text-primary text-center"
              value={tempWeight}
              onChangeText={setTempWeight}
              onBlur={() => {
                const val = parseFloat(tempWeight);
                if (!isNaN(val)) handleWeightChange(val - weight);
                setIsWeightEditing(false);
              }}
            />
          ) : (
            <TouchableOpacity onPress={() => {
              setIsWeightEditing(true);
              setTempWeight(weight.toString());
            }}>
              <Text className="text-6xl font-headline font-extrabold text-on-surface">
                {weight}
              </Text>
            </TouchableOpacity>
          )}
          <Text className="text-xl font-headline font-bold text-on-surface-variant">
            kg
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => handleWeightChange(0.5)}
          className="w-14 h-14 rounded-full bg-primary items-center justify-center"
        >
          <MaterialIcons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});
