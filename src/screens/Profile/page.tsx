import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View className="flex-1 bg-surface">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <TouchableOpacity className="p-2">
            <MaterialIcons name="menu" size={24} color="#006a34" />
          </TouchableOpacity>
          <Text className="font-headline font-black text-[#006a34] text-3xl italic">Kilo</Text>
          <View className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE6rypmci76YtHp9WjzG_mngC7kEq-Kx86F5HC75L2iK4_AwscfWD6M9YE1HOgvz4ZHi8OSIgDTOMrgR3vqnKlvThjdGobmienEOvH2T0N_ddBjXcqRST1qxKfRdSUz0Qis8_mQ_3CmjPEYCEW74BtaGtTmv8FaNDsxkyMq9b3sqWz6YUZCvCb4M2FvF0ZFfT2YJVRc-H7EV0MeVcka8Vl9wU_xXVf6sgeDWckLHW3WMCskHjPAg69mb2xxiJhjDLWToih229oOTln" }}
              className="w-full h-full"
            />
          </View>
        </View>

        <ScrollView className="flex-1 px-6 pt-8 pb-32" showsVerticalScrollIndicator={false}>
          {/* Profile Header */}
          <View className="flex-row items-center gap-6 mb-10">
            <View className="relative">
              <View className="w-24 h-24 rounded-xl overflow-hidden shadow-sm">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUEvTL8ib1_tkhhEfUstAShydZ_vR95zp1d7EEQ2XaSpTH8CmPQsuB8g67lSV-m3afuOQegYDOA6KVB1ybIvLjjOh1h494XfcWG9T1tGjVGbTrIHEQluyAAKqwNoBbAHUQpS-oQGn8e3aLFhfAeBQb20jvu2lhayyT0qUJoiEk1YYvKj7S10QNLuw6LJJPn0MQXAdhbUowHoNx7L6HBG3E0yK-470kgUC0Q63HggwHCJQJr5I-1HJQ-sW_MEyWWEqYVPHmrpbpzTLk" }}
                  className="w-full h-full"
                />
              </View>
              <View className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full border-4 border-surface">
                <MaterialIcons name="verified" size={16} color="white" />
              </View>
            </View>
            <View>
              <Text className="font-display font-extrabold text-3xl tracking-tight text-on-surface">Arjun Sharma</Text>
              <Text className="text-on-surface-variant font-medium mb-3">Member since Jan 2024</Text>
              <TouchableOpacity className="bg-surface-container-high px-6 py-2 rounded-full">
                <Text className="font-label text-sm font-semibold text-on-surface">Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Goal Summary Card */}
          <View className="bg-surface-container-low rounded-xl p-8 mb-10">
            <View className="flex-row justify-between items-center mb-6">
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="track-changes" size={24} color="#006a34" />
                <Text className="font-headline font-bold text-lg">Goal Summary</Text>
              </View>
            </View>
            <View className="flex-row gap-8">
              <View>
                <Text className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Current Weight</Text>
                <Text className="font-display font-extrabold text-4xl text-primary">78.5<Text className="text-lg">kg</Text></Text>
              </View>
              <View>
                <Text className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Goal Weight</Text>
                <Text className="font-display font-extrabold text-4xl text-secondary">72.0<Text className="text-lg">kg</Text></Text>
              </View>
            </View>
            <View className="bg-surface-container-highest p-5 rounded-lg flex-row items-center justify-between mt-6">
              <View>
                <Text className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Daily Target</Text>
                <Text className="font-display font-extrabold text-2xl text-on-surface">2,450 <Text className="text-sm opacity-60">kcal</Text></Text>
              </View>
              <View className="w-12 h-12 rounded-full border-4 border-primary/20 items-center justify-center">
                <MaterialIcons name="bolt" size={24} color="#006a34" />
              </View>
            </View>
          </View>

          {/* Settings Sections */}
          <View className="space-y-8 pb-10">
            {/* Account */}
            <View>
              <Text className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-[0.2em] px-2 mb-4">Account</Text>
              <View className="bg-surface-container-low rounded-xl overflow-hidden">
                <TouchableOpacity className="flex-row items-center justify-between p-5 border-b border-surface">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 rounded-full bg-white items-center justify-center text-primary">
                      <MaterialIcons name="mail" size={24} color="#006a34" />
                    </View>
                    <View>
                      <Text className="font-semibold text-on-surface">Email</Text>
                      <Text className="text-xs text-on-surface-variant">arjun.sharma@example.com</Text>
                    </View>
                  </View>
                  <MaterialIcons name="chevron-right" size={24} color="#abadae" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between p-5">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 rounded-full bg-secondary-container/30 items-center justify-center text-secondary">
                      <MaterialIcons name="workspace-premium" size={24} color="#904800" />
                    </View>
                    <View>
                      <Text className="font-semibold text-on-surface">Subscription</Text>
                      <Text className="text-xs text-secondary font-bold">Kilo Pro</Text>
                    </View>
                  </View>
                  <MaterialIcons name="chevron-right" size={24} color="#abadae" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Preferences */}
            <View>
              <Text className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-[0.2em] px-2 mb-4">Preferences</Text>
              <View className="bg-surface-container-low rounded-xl overflow-hidden">
                <TouchableOpacity className="flex-row items-center justify-between p-5 border-b border-surface">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 rounded-full bg-white items-center justify-center text-outline">
                      <MaterialIcons name="straighten" size={24} color="#757778" />
                    </View>
                    <Text className="font-semibold text-on-surface">Units</Text>
                  </View>
                  <Text className="text-sm font-medium text-on-surface-variant">kg / kcal</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between p-5 border-b border-surface">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 rounded-full bg-white items-center justify-center text-outline">
                      <MaterialIcons name="language" size={24} color="#757778" />
                    </View>
                    <Text className="font-semibold text-on-surface">Language</Text>
                  </View>
                  <Text className="text-sm font-medium text-on-surface-variant">English</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between p-5">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 rounded-full bg-white items-center justify-center text-outline">
                      <MaterialIcons name="notifications" size={24} color="#757778" />
                    </View>
                    <Text className="font-semibold text-on-surface">Notifications</Text>
                  </View>
                  <View className="w-10 h-5 bg-primary-container rounded-full items-end p-0.5">
                    <View className="w-4 h-4 bg-primary rounded-full" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* App */}
            <View>
              <Text className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-[0.2em] px-2 mb-4">App</Text>
              <View className="bg-surface-container-low rounded-xl overflow-hidden">
                <TouchableOpacity className="flex-row items-center p-5 border-b border-surface gap-4">
                  <MaterialIcons name="help" size={24} color="#757778" />
                  <Text className="font-semibold text-on-surface">Help & Support</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center p-5 border-b border-surface gap-4">
                  <MaterialIcons name="policy" size={24} color="#757778" />
                  <Text className="font-semibold text-on-surface">Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center p-5 gap-4">
                  <MaterialIcons name="gavel" size={24} color="#757778" />
                  <Text className="font-semibold text-on-surface">Terms of Service</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Logout */}
            <TouchableOpacity className="w-full bg-error/10 py-6 rounded-xl flex-row items-center justify-center gap-3">
              <MaterialIcons name="logout" size={24} color="#b31b25" />
              <Text className="font-headline font-bold text-error">Logout</Text>
            </TouchableOpacity>
            <Text className="text-center text-on-surface-variant/40 font-label text-xs tracking-widest">KILO VERSION 2.4.0 (382)</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
