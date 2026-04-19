import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useBodyMetrics } from "./useBodyMetrics";
import { GenderSelector } from "./components/GenderSelector";
import { AgeSelector } from "./components/AgeSelector";
import { WeightInput } from "./components/WeightInput";
import { HeightSelector } from "./components/HeightSelector";

export default function BodyMetrics() {
  const {
    gender,
    age,
    weight,
    height,
    handleGenderSelect,
    handleAgeChange,
    handleWeightChange,
    handleHeightChange,
    handleContinue,
  } = useBodyMetrics();

  return (
    <View className="flex-1 bg-surface">
      <StatusBar style="dark" />

      {/* Background Kinetic Accents */}
      <View
        pointerEvents="none"
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full"
        style={{ opacity: 0.5 }}
      />
      <View
        pointerEvents="none"
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-container/20 rounded-full"
        style={{ opacity: 0.5 }}
      />

      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="flex-1 px-6 pt-4 pb-12"
        >
          {/* Header & Progress Section */}
          <View className="flex-col gap-y-6 mb-10">
            <View className="flex-row justify-between items-center">
              <Text className="text-3xl font-extrabold text-primary tracking-tighter font-headline">
                Kilo
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={handleContinue}>
                <Text className="text-on-surface-variant font-semibold text-sm">
                  Skip
                </Text>
              </TouchableOpacity>
            </View>

            <View className="space-y-4">
              <View className="flex-row justify-between items-end">
                <Text className="text-4xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
                  Your Body{"\n"}Metrics
                </Text>
                <Text className="text-secondary font-headline font-bold text-xl">
                  2/5
                </Text>
              </View>
              {/* Progress Bar */}
              <View className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <View
                  className="h-full bg-primary rounded-full"
                  style={{ width: "40%" }}
                />
              </View>
            </View>
          </View>

          {/* Form Content */}
          <View className="flex-1 gap-y-12">
            <GenderSelector gender={gender} handleGenderSelect={handleGenderSelect} />

            {/* Metrics Section: Vertical Stack */}
            <View className="gap-y-12">
              <AgeSelector age={age} handleAgeChange={handleAgeChange} />
              <WeightInput weight={weight} handleWeightChange={handleWeightChange} />
              <HeightSelector height={height} handleHeightChange={handleHeightChange} />
            </View>
          </View>

          {/* Footer / CTA */}
          <View className="mt-12">
            <TouchableOpacity
              onPress={handleContinue}
              activeOpacity={0.8}
              className="w-full h-16 bg-primary rounded-full flex-row items-center justify-center gap-x-2 shadow-xl"
              style={styles.continueButtonShadow}
            >
              <Text className="text-on-primary font-headline font-bold text-lg">
                Continue
              </Text>
              <MaterialIcons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-center mt-6 text-on-surface-variant text-sm font-medium px-8 opacity-60">
              This helps us calculate your daily metabolic needs accurately.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  continueButtonShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
