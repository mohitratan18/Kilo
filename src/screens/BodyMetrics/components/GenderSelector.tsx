import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface GenderSelectorProps {
  gender: string;
  handleGenderSelect: (g: "male" | "female" | "other") => void;
}

export const GenderSelector: React.FC<GenderSelectorProps> = ({ gender, handleGenderSelect }) => (
  <View className="gap-y-4">
    <Text className="font-headline text-lg font-bold text-on-surface px-1">
      Select Gender
    </Text>
    <View className="flex-row gap-x-4">
      {["male", "female", "other"].map((g) => (
        <TouchableOpacity
          key={g}
          onPress={() => handleGenderSelect(g as any)}
          activeOpacity={0.8}
          className={`flex-1 flex-col items-center justify-center gap-y-3 p-6 rounded-lg ${
            gender === g
              ? "bg-primary shadow-lg"
              : "bg-surface-container-lowest"
          }`}
          style={gender === g ? styles.activeShadow : null}
        >
          <View className={`w-12 h-12 rounded-full items-center justify-center ${
            gender === g ? "bg-white/20" : g === 'other' ? "bg-secondary-container" : "bg-primary-container"
          }`}>
            <MaterialIcons
              name={g === "other" ? "transgender" : (g as any)}
              size={30}
              color={gender === g ? "white" : g === 'other' ? "#723800" : "#005f2e"}
            />
          </View>
          <Text className={`font-label text-[10px] font-bold uppercase tracking-[2px] ${
            gender === g ? "text-white" : "text-on-surface-variant"
          }`}>
            {g}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  activeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
