import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

interface FooterProps {
  navigation: NavigationProp<RootStackParamList>;
  currentRoute?: string;
}

export const Footer = ({ navigation, currentRoute }: FooterProps) => {
  const tabs = [
    { name: "Home", icon: "home", label: "Home" },
    { name: "Diary", icon: "menu-book", label: "Diary" },
    { name: "FAB", icon: "add", label: "" },
    { name: "Progress", icon: "query-stats", label: "Progress" },
    { name: "Profile", icon: "person", label: "Profile" },
  ];

  return (
    <View 
      className="absolute bottom-0 w-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl rounded-t-[32px] px-6 pb-8 pt-4 flex-row justify-between items-end h-24"
      style={styles.navShadow}
    >
      {tabs.map((tab, index) => {
        if (tab.name === "FAB") {
          return (
            <View key="FAB" className="-translate-y-6">
              <TouchableOpacity 
                onPress={() => navigation.navigate("FoodLog" as any)}
                activeOpacity={0.9}
                className="w-16 h-16 rounded-full bg-primary-container items-center justify-center"
                style={styles.fabShadow}
              >
                <MaterialIcons name="add" size={32} color="#005f2e" />
              </TouchableOpacity>
            </View>
          );
        }

        const isActive = currentRoute === tab.name;
        return (
          <TouchableOpacity 
            key={tab.name}
            onPress={() => navigation.navigate(tab.name as any)}
            className="items-center justify-center"
          >
            <MaterialIcons 
              name={tab.icon as any} 
              size={28} 
              color={isActive ? "#006a34" : "#abadae"} 
            />
            <Text 
              className={`text-[10px] font-semibold uppercase tracking-wider mt-1 ${
                isActive ? "text-primary" : "text-outline-variant"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.04,
        shadowRadius: 48,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  fabShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
