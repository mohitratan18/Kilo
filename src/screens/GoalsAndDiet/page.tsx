import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useGoalsAndDiet, Goal, Diet, ActivityLevel } from "./useGoalsAndDiet";

export default function GoalsAndDietPage() {
  const {
    goal,
    diet,
    activity,
    handleGoalSelect,
    handleDietSelect,
    handleActivityChange,
    handleCalculatePlan,
  } = useGoalsAndDiet();

  const goals = [
    {
      id: "lose" as Goal,
      title: "Lose Weight",
      desc: "Burn fat and improve health",
      icon: "trending-down",
    },
    {
      id: "maintain" as Goal,
      title: "Maintain",
      desc: "Keep weight and build stamina",
      icon: "balance",
    },
    {
      id: "gain" as Goal,
      title: "Gain Weight",
      desc: "Increase muscle and strength",
      icon: "trending-up",
    },
  ];

  const diets: Diet[] = ["veg", "non-veg", "vegan", "jain"];

  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* Header */}
      <View className="px-6 pt-4 pb-2 flex-row justify-between items-center">
        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <MaterialIcons name="arrow-back" size={24} color="#595c5d" />
        </TouchableOpacity>
        <Text className="text-3xl font-headline font-extrabold text-primary tracking-tighter">
          Kilo
        </Text>
        <View className="w-10 h-10 bg-surface-container rounded-full items-center justify-center">
          <MaterialIcons name="help-outline" size={20} color="#595c5d" />
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="px-6 pt-8 gap-y-10">
          {/* Progress Indicator */}
          <View className="gap-y-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-60">
                Step 2 of 4
              </Text>
              <Text className="text-[10px] font-bold uppercase tracking-widest text-primary">
                50%
              </Text>
            </View>
            <View className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
              <View className="h-full w-1/2 bg-primary rounded-full" />
            </View>
          </View>

          {/* Title Section */}
          <View className="gap-y-2">
            <Text className="text-4xl font-headline font-extrabold tracking-tight text-on-surface leading-none">
              Define your goal
            </Text>
            <Text className="text-on-surface-variant font-medium text-lg leading-relaxed">
              We'll tailor your daily caloric budget based on this choice.
            </Text>
          </View>

          {/* Goal Selection */}
          <View className="gap-y-4">
            {goals.map((item) => {
              const isActive = goal === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleGoalSelect(item.id)}
                  activeOpacity={0.9}
                  className={`flex-row items-center justify-between p-6 rounded-3xl transition-all duration-200 ${
                    isActive ? "bg-primary-container" : "bg-surface-container-lowest"
                  }`}
                  style={isActive ? styles.activeShadow : styles.cardShadow}
                >
                  <View className="flex-1 gap-y-1">
                    <Text className={`text-xl font-headline font-bold ${
                      isActive ? "text-on-primary-container" : "text-on-surface"
                    }`}>
                      {item.title}
                    </Text>
                    <Text className={`text-sm ${
                      isActive ? "text-on-primary-container/80" : "text-on-surface-variant"
                    }`}>
                      {item.desc}
                    </Text>
                  </View>
                  <View className={`w-12 h-12 rounded-full items-center justify-center ${
                    isActive ? "bg-primary" : "bg-surface-container-low"
                  }`}>
                    <MaterialIcons 
                      name={item.icon as any} 
                      size={24} 
                      color={isActive ? "white" : "#006a34"} 
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Diet Preference */}
          <View className="gap-y-6">
            <Text className="text-2xl font-headline font-bold tracking-tight text-on-surface">
              Your Diet Preference
            </Text>
            <View className="flex-row flex-wrap gap-3">
              {diets.map((item) => {
                const isActive = diet === item;
                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => handleDietSelect(item)}
                    className={`px-8 py-4 rounded-full ${
                      isActive ? "bg-primary" : "bg-surface-container-highest"
                    }`}
                  >
                    <Text className={`font-bold capitalize ${
                      isActive ? "text-on-primary" : "text-on-surface"
                    }`}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Activity Level Slider */}
          <View className="gap-y-6">
            <Text className="text-2xl font-headline font-bold tracking-tight text-on-surface">
              Activity Level
            </Text>
            <View className="bg-surface-container-low p-6 rounded-3xl gap-y-8">
              {/* Custom Slider Track */}
              <View className="relative w-full h-2 bg-surface-container-highest rounded-full mt-4">
                <View 
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full border-4 border-surface shadow-lg items-center justify-center"
                  style={{ 
                    left: `${(activity / 2) * 100}%`,
                    marginLeft: -16
                  }}
                />
              </View>
              {/* Slider Labels */}
              <View className="flex-row justify-between items-start">
                {[
                  { label: "Sedentary", icon: "chair", val: 0 },
                  { label: "Active", icon: "directions-run", val: 1 },
                  { label: "Athlete", icon: "fitness-center", val: 2 },
                ].map((lvl) => (
                  <TouchableOpacity 
                    key={lvl.val}
                    onPress={() => handleActivityChange(lvl.val as ActivityLevel)}
                    className="items-center gap-y-2 w-20"
                  >
                    <Text className={`text-[10px] font-bold uppercase ${
                      activity === lvl.val ? "text-primary" : "text-on-surface-variant"
                    }`}>
                      {lvl.label}
                    </Text>
                    <MaterialIcons 
                      name={lvl.icon as any} 
                      size={24} 
                      color={activity === lvl.val ? "#006a34" : "#abadae"} 
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Info Banner */}
          <View className="bg-secondary-container p-6 rounded-3xl flex-row gap-x-4 items-start">
            <MaterialIcons name="info" size={24} color="#904800" />
            <Text className="flex-1 text-sm font-medium text-on-secondary-container leading-relaxed">
              Based on your selection, we'll suggest a protein-rich diet to maintain your current muscle mass while optimizing energy levels.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View 
        className="absolute bottom-0 w-full p-6 bg-surface/80"
        style={{ paddingBottom: Platform.OS === "ios" ? 40 : 24 }}
      >
        <TouchableOpacity
          onPress={handleCalculatePlan}
          activeOpacity={0.8}
          className="w-full h-16 bg-primary rounded-full items-center justify-center shadow-xl shadow-primary/20"
          style={styles.btnShadow}
        >
          <Text className="text-on-primary font-headline font-bold text-lg">
            Calculate My Plan
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  activeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 16,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  btnShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
