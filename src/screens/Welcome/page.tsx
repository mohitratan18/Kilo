import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useWelcome } from "./useWelcome";

export default function Welcome() {
  const { handleContinueWithGoogle, handleContinueWithPhone } = useWelcome();

  return (
    <View className="flex-1 bg-surface">
      <StatusBar style="dark" />
      
      {/* Subtle Kinetic Background Elements */}
      <View 
        pointerEvents="none"
        style={styles.bgGradient1}
      />
      <View 
        pointerEvents="none"
        style={styles.bgGradient2}
      />

      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="relative"
        >
          <View className="flex-1 items-center justify-center px-8 py-8">
            <View className="w-full max-w-sm items-center">
              
              {/* Branding Section */}
              <View className="items-center mb-12">
                <View 
                  className="items-center justify-center p-8 mb-10 bg-surface-container-lowest"
                  style={styles.logoBox}
                >
                  <Text className="font-headline text-6xl font-extrabold tracking-tighter text-primary">Kilo</Text>
                </View>
                <View className="items-center">
                  <Text className="font-headline text-3xl font-bold tracking-tight text-on-surface text-center">Eat better, live faster</Text>
                  <Text className="font-body text-on-surface-variant font-medium opacity-60 mt-2 text-center text-lg">Your sanctuary for holistic health</Text>
                </View>
              </View>

              {/* Image Asset: High-End Lifestyle/Fitness Editorial */}
              <View 
                className="w-full aspect-square mb-12 bg-surface-container-low overflow-hidden"
                style={styles.imageCard}
              >
                <Image
                  className="w-full h-full"
                  resizeMode="cover"
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC74AFf_yoUG4hopGedke_RFv2qYkHgT6xmubin-2RAk2SQoePSMqVfgrPjxMvYHL5UjBPx6RdNVbOLdfW5stMkMZLqE9WrWgqMMbVrfMsTBW-MUvP99Prxbq0V8Li7YswTzF9CFy4mGPsZVlu1bbi8QIPGQaiV1sU4_RvE21UDQy849Nv1oA-lIk9s2pez72gocJNJTUXXp49f98WH19RwuznleOessyUmPhvieuMLlwk9w0lbUyBugNNWFjDex55lWSJDsMq4dF5Z" }}
                />
              </View>

              {/* Action Area: Thumb-First Interaction */}
              <View className="w-full gap-y-4 px-4">
                <TouchableOpacity
                  onPress={handleContinueWithGoogle}
                  activeOpacity={0.8}
                  className="w-full h-16 bg-primary rounded-full flex-row items-center justify-center"
                  style={styles.primaryButtonShadow}
                >
                  <View className="flex-row items-center gap-x-3">
                    <MaterialIcons name="account-circle" size={24} color="#cdffd4" />
                    <Text className="font-headline font-bold text-lg text-on-primary">Continue with Google</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleContinueWithPhone}
                  activeOpacity={0.8}
                  className="w-full h-16 bg-surface-container-high rounded-full flex-row items-center justify-center"
                >
                  <View className="flex-row items-center gap-x-3">
                    <MaterialIcons name="call" size={24} color="#2c2f30" />
                    <Text className="font-headline font-bold text-lg text-on-surface">Continue with Phone</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Contextual Footer */}
          <View className="w-full max-w-sm self-center px-12 pb-10 pt-4 items-center">
            <Text className="font-body text-[11px] text-on-surface-variant font-medium leading-relaxed opacity-60 text-center">
              By continuing, you agree to our{" "}
              <Text className="underline text-primary/60">Terms of Service</Text> 
              {" "}and{" "}
              <Text className="underline text-primary/60">Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bgGradient1: {
    position: "absolute",
    top: "-10%",
    right: "-10%",
    width: 400,
    height: 400,
    backgroundColor: "rgba(109, 254, 156, 0.12)",
    borderRadius: 200,
    ...Platform.select({
      ios: { shadowColor: "#6dfe9c", shadowOpacity: 0.5, shadowRadius: 100 },
    }),
  },
  bgGradient2: {
    position: "absolute",
    bottom: "10%",
    left: "-10%",
    width: 320,
    height: 320,
    backgroundColor: "rgba(255, 198, 159, 0.08)",
    borderRadius: 160,
    ...Platform.select({
      ios: { shadowColor: "#ffc69f", shadowOpacity: 0.4, shadowRadius: 80 },
    }),
  },
  logoBox: {
    borderRadius: 32, // xl radius
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.08,
        shadowRadius: 32,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  imageCard: {
    borderRadius: 48, // Between lg and xl
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 24 },
        shadowOpacity: 0.12,
        shadowRadius: 40,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  primaryButtonShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#006a34",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 24,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});
