import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useHome } from "./useHome";

export default function Home() {
  const {
    navigateToFoodLog,
    navigateToWater,
    navigateToEditPlan,
    currentDate,
  } = useHome();

  return (
    <View className="flex-1 bg-surface">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFe7pHCKVbQdEnryBzk5eziIX1f5wEcMX2fcNUGSM02ciBrhFoPlFL1VpUOKf8J3XGTRRhQ1ym357dAs-kdiXbHOeYUBzVxBzBbyX2C9TAfmBkMWNiOM55nV0X1R7kzIntCI5j4c06G31FnC73_zO2rRzT7IDjMq4bRR-RjyJHkkxXrgC5a3YSy8IHDmFOOxLS59_Fbkj8Oh7s5WUUBxMUmIPf4Bb91Lgp4J3ux64XTTwRKtLZ18MQ6vsTFf5Wqx9uKWE2x-IN-EIX" }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <Text className="text-3xl font-headline font-extrabold text-primary tracking-tighter">Kilo</Text>
          </View>
          <TouchableOpacity className="p-2">
            <MaterialIcons name="calendar-today" size={24} color="#006a34" />
          </TouchableOpacity>
        </View>

        <ScrollView 
          className="flex-1 px-6" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* Greeting Section */}
          <View className="mb-10">
            <Text className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Good Morning, Rohan</Text>
            <Text className="text-on-surface-variant font-medium mt-1">{currentDate}</Text>
          </View>

          {/* Edit Plan Button */}
          <View className="flex-row justify-end mb-2">
            <TouchableOpacity 
              onPress={navigateToEditPlan}
              className="flex-row items-center gap-1"
            >
              <MaterialIcons name="edit" size={14} color="#006a34" />
              <Text className="font-label text-xs font-bold uppercase tracking-wider text-primary">Edit Plan</Text>
            </TouchableOpacity>
          </View>

          {/* Central Calorie Ring */}
          <View className="mb-12 items-center justify-center">
            <View className="relative w-64 h-64 items-center justify-center">
              {/* Background Ring */}
              <View 
                className="absolute inset-0 rounded-full border-surface-container" 
                style={{ borderWidth: 12 }} 
              />
              {/* Progress Ring (Simulated with borders) */}
              <View 
                className="absolute inset-0 rounded-full border-primary" 
                style={[
                  { borderWidth: 12, borderLeftColor: 'transparent', transform: [{ rotate: '-45deg' }] }
                ]} 
              />
              <View className="items-center z-10">
                <Text className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter">1200</Text>
                <Text className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1">Remaining</Text>
              </View>
            </View>
          </View>

          {/* Macro Progress Bars */}
          <View className="flex-row gap-4 mb-12">
            {/* Protein */}
            <View className="flex-1 gap-2">
              <View className="flex-row justify-between items-end px-1">
                <Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Protein</Text>
                <Text className="text-[10px] font-bold text-on-surface">92/140g</Text>
              </View>
              <View className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <View className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
              </View>
            </View>
            {/* Carbs */}
            <View className="flex-1 gap-2">
              <View className="flex-row justify-between items-end px-1">
                <Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Carbs</Text>
                <Text className="text-[10px] font-bold text-on-surface">150/220g</Text>
              </View>
              <View className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <View className="h-full bg-secondary rounded-full" style={{ width: "68%" }} />
              </View>
            </View>
            {/* Fats */}
            <View className="flex-1 gap-2">
              <View className="flex-row justify-between items-end px-1">
                <Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Fats</Text>
                <Text className="text-[10px] font-bold text-on-surface">45/65g</Text>
              </View>
              <View className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <View className="h-full bg-tertiary-dim rounded-full" style={{ width: "70%" }} />
              </View>
            </View>
          </View>

          {/* Meal Sections */}
          <View className="gap-y-4 mb-12">
            {/* Breakfast */}
            <TouchableOpacity 
              onPress={navigateToFoodLog}
              activeOpacity={0.8}
              className="bg-surface-container-low rounded-lg p-5 flex-row justify-between items-center"
            >
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-primary-container items-center justify-center">
                  <MaterialIcons name="wb-twilight" size={24} color="#005f2e" />
                </View>
                <View>
                  <Text className="font-headline text-lg font-bold text-on-surface">Breakfast</Text>
                  <Text className="text-sm text-on-surface-variant">Oats, Almonds, Berries • 420 kcal</Text>
                </View>
              </View>
              <View className="w-10 h-10 rounded-full bg-surface-container-highest items-center justify-center">
                <MaterialIcons name="add" size={24} color="#2c2f30" />
              </View>
            </TouchableOpacity>

            {/* Lunch */}
            <TouchableOpacity 
              onPress={navigateToFoodLog}
              activeOpacity={0.8}
              className="bg-surface-container-lowest rounded-lg p-5 flex-row justify-between items-center"
              style={styles.shadowSm}
            >
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-secondary-container items-center justify-center">
                  <MaterialIcons name="light-mode" size={24} color="#723800" />
                </View>
                <View>
                  <Text className="font-headline text-lg font-bold text-on-surface">Lunch</Text>
                  <Text className="text-sm text-on-surface-variant">Grilled Chicken Salad • 580 kcal</Text>
                </View>
              </View>
              <View className="w-10 h-10 rounded-full bg-surface-container-highest items-center justify-center">
                <MaterialIcons name="add" size={24} color="#2c2f30" />
              </View>
            </TouchableOpacity>

            {/* Dinner */}
            <TouchableOpacity 
              onPress={navigateToFoodLog}
              activeOpacity={0.8}
              className="bg-surface-container-low rounded-lg p-5 flex-row justify-between items-center"
            >
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-tertiary-container items-center justify-center">
                  <MaterialIcons name="dark-mode" size={24} color="#004956" />
                </View>
                <View>
                  <Text className="font-headline text-lg font-bold text-on-surface">Dinner</Text>
                  <Text className="text-sm font-medium text-primary">Not logged</Text>
                </View>
              </View>
              <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                <MaterialIcons name="add" size={24} color="#cdffd4" />
              </View>
            </TouchableOpacity>

            {/* Snacks */}
            <TouchableOpacity 
              onPress={navigateToFoodLog}
              activeOpacity={0.8}
              className="bg-surface-container-low rounded-lg p-5 flex-row justify-between items-center"
            >
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-surface-variant items-center justify-center">
                  <MaterialIcons name="cookie" size={24} color="#595c5d" />
                </View>
                <View>
                  <Text className="font-headline text-lg font-bold text-on-surface">Snacks</Text>
                  <Text className="text-sm font-medium text-primary">Not logged</Text>
                </View>
              </View>
              <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                <MaterialIcons name="add" size={24} color="#cdffd4" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Water Tracker */}
          <View className="bg-primary-container/30 rounded-lg p-6 mb-8">
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <Text className="font-headline text-xl font-bold text-on-primary-container">Hydration</Text>
                <Text className="text-sm text-on-primary-container/70">6 of 10 cups reached</Text>
              </View>
              <MaterialIcons name="water-drop" size={40} color="#006a34" />
            </View>
            <View className="flex-row justify-between gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <View key={i} className="flex-1 h-12 rounded-lg bg-primary items-center justify-center">
                  <MaterialIcons name="local-drink" size={20} color="#cdffd4" />
                </View>
              ))}
              {[7, 8].map((i) => (
                <View key={i} className="flex-1 h-12 rounded-lg bg-surface-container-highest items-center justify-center">
                  <MaterialIcons name="local-drink" size={20} color="#757778" />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowSm: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.02,
        shadowRadius: 24,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
