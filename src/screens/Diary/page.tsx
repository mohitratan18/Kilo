import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useDiary } from "./useDiary";

export default function Diary() {
  const { navigateToFoodLog } = useDiary();

  const days = [
    { day: "Mon", date: 21 },
    { day: "Tue", date: 22 },
    { day: "Wed", date: 23 },
    { day: "Thu", date: 24, active: true },
    { day: "Fri", date: 25 },
    { day: "Sat", date: 26 },
  ];

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
                {/* Replace with actual user image if available */}
              <View className="w-full h-full bg-surface-variant" />
            </View>
            <Text className="font-manrope text-2xl font-extrabold text-primary">Kilo</Text>
          </View>
          <TouchableOpacity className="active:opacity-80">
            <MaterialIcons name="calendar-today" size={28} color="#006a34" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
          {/* Date Switcher */}
          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="font-headline text-3xl font-bold tracking-tight text-on-surface">Diary</Text>
              <View className="flex-row items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
                <Text className="font-label text-sm font-semibold text-on-surface">Today, Oct 24</Text>
                <MaterialIcons name="expand-more" size={16} color="#2c2f30" />
              </View>
            </View>
            <View className="flex-row justify-between">
              {days.map((d, index) => (
                <View key={index} className={`flex-col items-center gap-2 p-2 ${d.active ? "bg-primary-container rounded-3xl" : ""}`}>
                  <Text className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{d.day}</Text>
                  <View className="w-10 h-10 flex items-center justify-center rounded-full">
                    <Text className={`text-sm font-bold ${d.active ? "text-on-primary-container" : "text-on-surface-variant"}`}>{d.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Summary Bento */}
          <View className="bg-surface-container-lowest rounded-xl p-8 mb-10 editorial-shadow">
            <View className="flex-row justify-between items-end">
              <View>
                <Text className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Total Consumed</Text>
                <Text className="font-display text-5xl font-extrabold text-primary">1,420</Text>
              </View>
              <View className="items-end">
                <Text className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-1">Daily Target</Text>
                <Text className="font-headline text-xl font-bold text-on-surface">1,850 <Text className="text-sm font-normal text-on-surface-variant">kcal</Text></Text>
              </View>
            </View>
            <View className="mt-8 w-full h-3 bg-surface-container rounded-full overflow-hidden">
              <View className="h-full bg-primary rounded-full" style={{ width: "76%" }} />
            </View>
          </View>

          {/* Meal Sections */}
          <View className="gap-y-6">
            <MealSection title="Breakfast" kcal="365" recommended="450" icon="wb-twilight" color="primary" />
            <MealSection title="Lunch" kcal="540" recommended="650" icon="light-mode" color="secondary" />
            <MealSectionEmpty title="Dinner" recommended="500" icon="dark-mode" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function MealSection({ title, kcal, recommended, icon, color }: any) {
  return (
    <View className="bg-surface-container-low rounded-lg p-6">
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center gap-3">
          <View className={`w-10 h-10 rounded-full bg-${color}-container flex items-center justify-center`}>
            <MaterialIcons name={icon} size={24} color="#004956" />
          </View>
          <View>
            <Text className="font-headline text-lg font-bold">{title}</Text>
            <Text className="font-label text-xs text-on-surface-variant">Recommended: {recommended} kcal</Text>
          </View>
        </View>
        <View className="items-end">
          <Text className="font-headline text-xl font-extrabold text-on-surface">{kcal}</Text>
          <Text className="font-label text-[10px] uppercase text-on-surface-variant">kcal</Text>
        </View>
      </View>
      <TouchableOpacity className="w-full mt-4 flex-row items-center justify-center gap-2 py-4 rounded-xl bg-surface-container-highest">
        <MaterialIcons name="add" size={16} color="#2c2f30" />
        <Text className="text-sm font-semibold">Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

function MealSectionEmpty({ title, recommended, icon }: any) {
  return (
    <View className="bg-surface-container-low rounded-lg p-6">
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
            <MaterialIcons name={icon} size={24} color="#004956" />
          </View>
          <View>
            <Text className="font-headline text-lg font-bold">{title}</Text>
            <Text className="font-label text-xs text-on-surface-variant">Recommended: {recommended} kcal</Text>
          </View>
        </View>
        <View className="items-end">
          <Text className="font-headline text-xl font-extrabold text-on-surface-variant">0</Text>
          <Text className="font-label text-[10px] uppercase text-on-surface-variant">kcal</Text>
        </View>
      </View>
      <View className="items-center py-8">
        <Text className="font-body text-sm text-on-surface-variant mb-4">You haven't logged anything for dinner yet.</Text>
        <TouchableOpacity className="flex-row items-center gap-2 px-6 py-3 rounded-full bg-primary">
          <MaterialIcons name="add-circle" size={16} color="#ffffff" />
          <Text className="font-bold text-on-primary">Log Dinner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    editorialShadow: {
        shadowColor: "#2c2f30",
        shadowOffset: { width: 0, height: 48 },
        shadowOpacity: 0.04,
        shadowRadius: 48,
    }
});
