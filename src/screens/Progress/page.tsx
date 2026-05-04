import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useProgress } from "./useProgress";

export default function Progress() {
  const {
    navigateToFoodLog,
  } = useProgress();

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* TopAppBar */}
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
          className="flex-1 px-6 pt-8" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* Current Weight */}
          <View className="mb-10">
            <Text className="font-label text-on-surface-variant font-medium tracking-wide">Current Weight</Text>
            <View className="flex-row items-baseline gap-2 mt-1">
              <Text className="font-headline text-[4.5rem] font-extrabold leading-none tracking-tighter text-on-surface">72.5</Text>
              <Text className="font-headline text-2xl font-bold text-on-surface-variant">kg</Text>
            </View>
            <View className="inline-flex flex-row items-center gap-1.5 px-3 py-1 bg-primary-container rounded-full mt-3 self-start">
              <MaterialIcons name="trending-down" size={16} color="#005f2e" />
              <Text className="text-xs font-bold text-on-primary-container font-label uppercase tracking-widest">-1.2 kg this week</Text>
            </View>
          </View>

          {/* Stats Bento Grid */}
          <View className="flex-row flex-wrap gap-4 mb-10">
            {/* Streak Card */}
            <View className="w-full bg-secondary-container rounded-lg p-6 flex-row items-center justify-between">
              <View>
                <Text className="font-label text-on-secondary-container font-bold text-xs uppercase tracking-widest mb-1">Consistency</Text>
                <Text className="font-headline text-3xl font-bold text-on-secondary-container">Streak: 12 Days</Text>
              </View>
              <View className="w-16 h-16 rounded-full bg-[#904800]/10 flex items-center justify-center">
                <MaterialIcons name="local-fire-department" size={40} color="#904800" />
              </View>
            </View>
            
            {/* Weekly Avg Calories */}
            <View className="flex-1 bg-surface-container-lowest p-6 rounded-lg shadow-sm h-40 justify-between">
              <MaterialIcons name="restaurant" size={24} color="#006a34" />
              <View>
                <Text className="font-headline text-2xl font-bold text-on-surface leading-tight">1,840</Text>
                <Text className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">Avg Calories</Text>
              </View>
            </View>
            
            {/* Water Goal Met */}
            <View className="flex-1 bg-surface-container-lowest p-6 rounded-lg shadow-sm h-40 justify-between">
              <MaterialIcons name="water-drop" size={24} color="#006575" />
              <View>
                <Text className="font-headline text-2xl font-bold text-on-surface leading-tight">95%</Text>
                <Text className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">Water Goal met</Text>
              </View>
            </View>
          </View>

          {/* Motivational Quote */}
          <View className="p-8 rounded-xl bg-surface-container-high relative overflow-hidden mb-10">
            <MaterialIcons name="format-quote" size={120} color="#2c2f30" style={{ position: 'absolute', right: -20, top: -20, opacity: 0.05 }} />
            <Text className="font-headline text-lg italic text-on-surface leading-relaxed z-10">
              "Progress is not a straight line, but every small breath leads to a stronger peak."
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
