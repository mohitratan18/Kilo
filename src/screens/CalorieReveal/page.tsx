import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from "react-native-reanimated";
import { useCalorieReveal } from "./useCalorieReveal";

const MacroBar = ({ label, value, percentage, color, textColor }: { 
  label: string, 
  value: string, 
  percentage: number, 
  color: string,
  textColor: string
}) => {
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withSpring(percentage, { damping: 20, stiffness: 90 });
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View className="gap-y-3">
      <View className="flex-row justify-between items-end">
        <Text className="font-headline font-bold text-lg text-on-surface">{label}</Text>
        <Text className="font-body font-medium text-on-surface-variant">{value}</Text>
      </View>
      <View className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
        <Animated.View 
          style={[{ height: '100%', backgroundColor: color, borderRadius: 9999 }, animatedStyle]} 
        />
      </View>
    </View>
  );
};

export default function CalorieReveal() {
  const { plan, handleGetStarted, handleEditPlan } = useCalorieReveal();

  return (
    <View className="flex-1 bg-surface">
      <StatusBar style="dark" />
      
      {/* Background Decorations */}
      <View 
        pointerEvents="none"
        style={styles.bgDecoration1}
      />
      <View 
        pointerEvents="none"
        style={styles.bgDecoration2}
      />

      <SafeAreaView className="flex-1">
        <View className="w-full pt-4 pb-2 flex-row justify-center items-center px-6">
          <Text className="text-3xl font-extrabold text-primary tracking-tighter font-headline">Kilo</Text>
        </View>


        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="px-8"
        >
          <View className="flex-1 justify-center py-12">
            {/* Analysis Header */}
            <View className="mb-12">
              <View className="flex-row justify-between items-center mb-2 w-full">
                <Text className="text-on-surface-variant font-label text-xs uppercase tracking-[0.2em]">Analysis Complete</Text>
                <TouchableOpacity 
                  onPress={handleEditPlan}
                  className="flex-row items-center gap-1.5 active:opacity-70"
                >
                  <MaterialIcons name="tune" size={18} color="#006a34" />
                  <Text className="text-primary font-label text-xs font-bold uppercase tracking-wider">
                    Edit Plan
                  </Text>
                </TouchableOpacity>
              </View>
              <Text className="text-4xl font-headline font-extrabold leading-tight tracking-tight text-on-surface">
                Your custom plan is ready
              </Text>
            </View>

            {/* Big Number Layout */}
            <View className="w-full relative mb-16">
              <View className="flex-col items-start">
                <Text 
                  className="font-headline font-extrabold text-primary leading-none tracking-tighter"
                  style={Platform.OS === 'ios' ? { fontSize: 88 } : { fontSize: 80 }}
                >
                  {plan.calories.toLocaleString()}
                </Text>
                <Text className="text-2xl font-headline font-bold text-on-surface-variant mt-[-4px] ml-2">
                  kcal / day
                </Text>
              </View>
              {/* Asymmetric Kinetic Element */}
              <View 
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary-container opacity-20 rounded-full"
                style={styles.blurCircle}
              />
            </View>

            {/* Macro Breakdown */}
            <View className="w-full gap-y-8">
              <MacroBar 
                label="Protein" 
                value={`${plan.macros.protein}g`} 
                percentage={35} 
                color="#006a34" 
                textColor="text-on-surface"
              />
              <MacroBar 
                label="Carbs" 
                value={`${plan.macros.carbs}g`} 
                percentage={50} 
                color="#904800" 
                textColor="text-on-surface"
              />
              <MacroBar 
                label="Fat" 
                value={`${plan.macros.fat}g`} 
                percentage={25} 
                color="#005867" 
                textColor="text-on-surface"
              />
            </View>

            {/* Insight Card */}
            <View className="mt-12 p-6 bg-surface-container-low rounded-lg w-full flex-row items-start gap-x-4">
              <MaterialIcons name="lightbulb-outline" size={24} color="#006a34" />
              <View className="flex-1">
                <Text className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Based on your activity level and metabolic profile, this deficit is optimized for{" "}
                  <Text className="font-bold text-on-surface">sustainable fat loss</Text> without muscle depletion.
                </Text>
              </View>
            </View>
          </View>
          
          {/* Spacer for fixed button */}
          <View className="h-40" />
        </ScrollView>

        {/* Fixed Action Area */}
        <View 
          className="absolute bottom-0 left-0 w-full p-8 bg-surface/90"
          style={{ paddingBottom: Platform.OS === 'ios' ? 40 : 24 }}
        >
          <TouchableOpacity
            onPress={handleGetStarted}
            activeOpacity={0.9}
            className="w-full h-16 bg-primary rounded-xl flex-row items-center justify-center gap-x-2"
            style={styles.buttonShadow}
          >
            <Text className="text-on-primary font-headline font-bold text-lg">Start Tracking</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#cdffd4" />
          </TouchableOpacity>

          {/* Pagination Indicators */}
          <View className="mt-6 flex-row justify-center gap-x-1">
            <View className="h-1 w-4 bg-surface-container-highest rounded-full" />
            <View className="h-1 w-4 bg-surface-container-highest rounded-full" />
            <View className="h-1 w-8 bg-primary rounded-full" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bgDecoration1: {
    position: "absolute",
    top: 80,
    left: -80,
    width: 256,
    height: 256,
    backgroundColor: "rgba(255, 198, 159, 0.1)",
    borderRadius: 128,
    ...Platform.select({
      ios: { shadowColor: "#ffc69f", shadowOpacity: 0.1, shadowRadius: 100 },
    }),
  },
  bgDecoration2: {
    position: "absolute",
    bottom: 160,
    right: -80,
    width: 320,
    height: 320,
    backgroundColor: "rgba(109, 254, 156, 0.1)",
    borderRadius: 160,
    ...Platform.select({
      ios: { shadowColor: "#6dfe9c", shadowOpacity: 0.1, shadowRadius: 100 },
    }),
  },
  blurCircle: {
    ...Platform.select({
      ios: { shadowColor: "#6dfe9c", shadowOpacity: 0.2, shadowRadius: 48 },
    }),
  },
  buttonShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 24,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
