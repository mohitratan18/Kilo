import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFoodLog } from "./useFoodLog";

export default function FoodLog() {
  const {
    selectedMeal,
    setSelectedMeal,
    mealTypes,
    searchQuery,
    setSearchQuery,
    recentFoods,
    toggleFood,
    updateQuantity,
    goBack,
    logMeal,
  } = useFoodLog();

  return (
    <View className="flex-1 bg-surface">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4 bg-surface sticky top-0 z-10">
          <TouchableOpacity onPress={goBack} className="p-1">
            <MaterialIcons name="arrow-back" size={24} color="#757778" />
          </TouchableOpacity>
          <Text className="text-3xl font-headline font-extrabold text-primary tracking-tighter">
            Kilo
          </Text>
          <View className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center">
            <MaterialIcons name="search" size={24} color="#757778" />
          </View>
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 24 }}
        >
          {/* Meal Type Selector */}
          <View className="mt-6 gap-3">
            <Text className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-60">
              Logging for
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row"
              contentContainerStyle={{ gap: 8 }}
            >
              {mealTypes.map((meal) => (
                <TouchableOpacity
                  key={meal}
                  onPress={() => setSelectedMeal(meal)}
                  className={`px-5 py-2.5 rounded-full ${
                    selectedMeal === meal
                      ? "bg-primary"
                      : "bg-surface-container-highest"
                  }`}
                  style={selectedMeal === meal ? styles.shadowMd : {}}
                >
                  <Text
                    className={`font-semibold text-sm ${
                      selectedMeal === meal ? "text-on-primary" : "text-on-surface"
                    }`}
                  >
                    {meal}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Search Bar */}
          <View className="mt-8 relative">
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search food, brands, meals..."
              className="w-full h-14 bg-surface-container-lowest rounded-2xl px-12 text-on-surface font-medium"
              style={styles.shadowSm}
            />
            <View className="absolute left-4 top-1/2 -translate-y-3">
              <MaterialIcons name="search" size={24} color="#595c5d" />
            </View>
            <TouchableOpacity className="absolute right-4 top-1/2 -translate-y-3">
              <MaterialIcons name="qr-code-scanner" size={24} color="#595c5d" />
            </TouchableOpacity>
          </View>

          {/* Food List Section */}
          <View className="mt-8 gap-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-2xl font-headline font-bold tracking-tight text-on-surface">
                Recent Foods
              </Text>
              <TouchableOpacity>
                <Text className="text-primary text-sm font-bold">View all</Text>
              </TouchableOpacity>
            </View>

            <View className="gap-3">
              {recentFoods.map((food) => (
                <View
                  key={food.id}
                  className={`bg-surface-container-lowest p-4 rounded-xl flex-col gap-4 ${
                    !food.added ? "opacity-60" : ""
                  }`}
                  style={styles.shadowSm}
                >
                  <View className="flex-row items-center gap-3">
                    <View className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
                      {food.icon === "egg" ? (
                        <MaterialCommunityIcons name="egg" size={24} color="#a8a29e" />
                      ) : food.icon === "coffee" ? (
                        <MaterialIcons name="coffee" size={24} color="#a8a29e" />
                      ) : (
                        <MaterialIcons name="restaurant" size={24} color="#a8a29e" />
                      )}
                    </View>
                    <View className="flex-1">
                      <Text className="font-headline font-bold text-on-surface">
                        {food.name}
                      </Text>
                      <Text className="text-xs text-on-surface-variant">
                        {food.calories} kcal / {food.unit}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => toggleFood(food.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        food.added
                          ? "bg-primary-container"
                          : "bg-surface-container"
                      }`}
                    >
                      <MaterialIcons
                        name="add"
                        size={24}
                        color={food.added ? "#005f2e" : "#595c5d"}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Portion Controls */}
                  {food.added && food.quantity !== undefined && (
                    <View className="flex-row items-center justify-between pt-3 border-t border-surface-container">
                      <View className="flex-row items-center bg-surface-container-low rounded-full px-2 py-1">
                        <TouchableOpacity 
                          onPress={() => updateQuantity(food.id, -0.5)}
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          <MaterialIcons name="remove" size={18} color="#006a34" />
                        </TouchableOpacity>
                        <Text className="px-4 font-bold text-sm">{food.quantity}</Text>
                        <TouchableOpacity 
                          onPress={() => updateQuantity(food.id, 0.5)}
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          <MaterialIcons name="add" size={18} color="#006a34" />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity className="flex-row items-center gap-1 bg-surface-container-low rounded-full px-4 py-2">
                        <Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                          {food.portion}
                        </Text>
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={16}
                          color="#595c5d"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Quick Summary Box */}
          <View className="mt-2 rounded-2xl bg-secondary-container p-5 flex-row items-start gap-4">
            <MaterialIcons name="analytics" size={24} color="#904800" />
            <View className="flex-1 gap-1">
              <Text className="text-sm font-bold text-on-secondary-container">
                Meal Estimation
              </Text>
              <Text className="text-sm text-on-secondary-container opacity-90 leading-5">
                Currently logging ~310 kcal for Breakfast. You have 1,450 kcal
                remaining for the day.
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Floating Action Button */}
        <View className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-surface via-surface/90 to-transparent">
          <TouchableOpacity
            onPress={logMeal}
            activeOpacity={0.9}
            className="w-full h-16 bg-primary rounded-full flex-row items-center justify-center gap-2"
            style={styles.fabShadow}
          >
            <MaterialIcons name="done-all" size={24} color="#cdffd4" />
            <Text className="font-headline font-bold text-lg text-on-primary">
              Log Meal
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowSm: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  shadowMd: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  fabShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
