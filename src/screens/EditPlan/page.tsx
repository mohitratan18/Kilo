import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
  Dimensions,
  PanResponder,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  useSharedValue,
  interpolateColor
} from "react-native-reanimated";
import { useEditPlan } from "./useEditPlan";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Simple interactive slider component
const CustomSlider = ({ 
  value, 
  onValueChange, 
  color = "#006a34" 
}: { 
  value: number, 
  onValueChange: (val: number) => void,
  color?: string
}) => {
  const sliderWidth = SCREEN_WIDTH - 80; // Approximate width based on padding
  
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newValue = Math.round(Math.max(0, Math.min(100, (gestureState.moveX - 40) / sliderWidth * 100)));
        onValueChange(newValue);
      },
      onPanResponderRelease: (evt, gestureState) => {
        const newValue = Math.round(Math.max(0, Math.min(100, (gestureState.moveX - 40) / sliderWidth * 100)));
        onValueChange(newValue);
      },
    })
  ).current;

  return (
    <View className="w-full h-8 justify-center" {...panResponder.panHandlers}>
      <View className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
        <View 
          style={{ width: `${value}%`, backgroundColor: color }} 
          className="h-full" 
        />
      </View>
      <View 
        className="absolute w-6 h-6 bg-white border-4 rounded-full shadow-md"
        style={{ 
          left: `${value}%`, 
          marginLeft: -12,
          borderColor: color 
        }}
      />
    </View>
  );
};

const MacroCard = ({ 
  title, 
  desc, 
  value, 
  grams, 
  kcal, 
  color, 
  onValueChange 
}: { 
  title: string, 
  desc: string, 
  value: number, 
  grams: number, 
  kcal: number, 
  color: string,
  onValueChange: (val: number) => void
}) => (
  <View className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-white/50 mb-6">
    <View className="flex-row justify-between items-end mb-6">
      <View>
        <Text className="font-headline font-bold text-2xl" style={{ color }}>{title}</Text>
        <Text className="text-on-surface-variant font-label text-xs uppercase tracking-widest">{desc}</Text>
      </View>
      <Text className="font-headline font-extrabold text-3xl text-on-surface">{value}%</Text>
    </View>
    
    <CustomSlider value={value} onValueChange={onValueChange} color={color} />
    
    <View className="flex-row gap-4 mt-6">
      <View className="flex-1 bg-surface-container-low p-4 rounded-2xl">
        <Text className="text-[10px] font-label uppercase text-on-surface-variant mb-1">Grams</Text>
        <Text className="text-xl font-headline font-bold text-on-surface">{grams}g</Text>
      </View>
      <View className="flex-1 bg-surface-container-low p-4 rounded-2xl">
        <Text className="text-[10px] font-label uppercase text-on-surface-variant mb-1">Calories</Text>
        <Text className="text-xl font-headline font-bold text-on-surface">{kcal} kcal</Text>
      </View>
    </View>
  </View>
);

const NavItem = ({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) => (
  <TouchableOpacity className="items-center gap-1">
    <View className={`p-2 rounded-2xl ${active ? "bg-primary-container" : ""}`}>
      <MaterialIcons name={icon as any} size={24} color={active ? "#006a34" : "#9b9d9e"} />
    </View>
    <Text className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-primary" : "text-on-surface-variant"}`}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function EditPlanPage({ showFooter = false }: { showFooter?: boolean }) {
  const {
    calories,
    macros,
    totalPct,
    isBalanced,
    handleUpdateCalories,
    handleUpdateProtein,
    handleUpdateCarbs,
    handleUpdateFat,
    handleSave,
  } = useEditPlan();

  const navigation = useNavigation();

  const balanceAnim = useSharedValue(isBalanced ? 1 : 0);
  
  useEffect(() => {
    balanceAnim.value = withSpring(isBalanced ? 1 : 0);
  }, [isBalanced]);

  const validationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      balanceAnim.value,
      [0, 1],
      ["rgba(179, 27, 37, 0.1)", "rgba(0, 106, 52, 0.1)"]
    ),
    transform: [{ scale: withSpring(isBalanced ? 1 : 0.98) }]
  }));

  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* Header */}
      <View className="px-6 py-4 flex-row justify-between items-center">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-low mr-1"
          >
            <MaterialIcons name="arrow-back" size={24} color="#006a34" />
          </TouchableOpacity>
          <View className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
            <View className="w-full h-full bg-primary/20 items-center justify-center">
               <MaterialIcons name="person" size={24} color="#006a34" />
            </View>
          </View>
          <Text className="text-3xl font-black text-primary tracking-tighter font-headline">Kilo</Text>
        </View>
        <TouchableOpacity className="w-12 h-12 items-center justify-center rounded-full bg-surface-container-low">
          <MaterialIcons name="notifications-none" size={24} color="#006a34" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: showFooter ? 160 : 120 }}
      >
        <View className="flex-col gap-10">
          {/* Target Intake Section */}
          <View className="gap-2">
            <Text className="font-headline text-on-surface-variant text-xs font-bold tracking-widest uppercase ml-1">
              Target Intake
            </Text>
            <View className="flex-row items-baseline gap-2">
              <TextInput
                className="font-headline text-7xl font-extrabold text-primary p-0 m-0"
                value={calories.toLocaleString()}
                onChangeText={handleUpdateCalories}
                keyboardType="numeric"
              />
              <Text className="font-headline font-bold text-2xl text-on-surface-variant">kcal</Text>
            </View>
            <Text className="text-on-surface-variant text-sm mt-2 leading-relaxed max-w-[280px]">
              Adjust your daily calorie goal to recalculate your optimal macro distribution.
            </Text>
          </View>

          {/* Simple Circular Progress Placeholder */}
          <View className="items-center justify-center py-4">
             <View className="w-64 h-64 rounded-full border-[12px] border-surface-container-low items-center justify-center">
                <View className="w-48 h-48 rounded-full border-[12px] border-surface-container-low items-center justify-center">
                   <View className="w-32 h-32 rounded-full border-[12px] border-surface-container-low items-center justify-center">
                      <View className="items-center">
                        <Text className="font-headline font-black text-4xl text-on-surface">{totalPct}%</Text>
                        <Text className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">
                          {isBalanced ? "Balanced" : "Adjusting"}
                        </Text>
                      </View>
                   </View>
                </View>
             </View>
          </View>

          {/* Macro Cards */}
          <View>
            <MacroCard
              title="Protein"
              desc="Muscle Growth & Recovery"
              value={macros.protein.pct}
              grams={macros.protein.grams}
              kcal={macros.protein.kcal}
              color="#006a34"
              onValueChange={handleUpdateProtein}
            />
            <MacroCard
              title="Carbs"
              desc="Daily Energy Source"
              value={macros.carbs.pct}
              grams={macros.carbs.grams}
              kcal={macros.carbs.kcal}
              color="#904800"
              onValueChange={handleUpdateCarbs}
            />
            <MacroCard
              title="Fat"
              desc="Hormonal Balance"
              value={macros.fat.pct}
              grams={macros.fat.grams}
              kcal={macros.fat.kcal}
              color="#006575"
              onValueChange={handleUpdateFat}
            />
          </View>

          {/* Validation */}
          <Animated.View 
            style={validationStyle}
            className="flex-row items-center justify-between px-6 py-4 rounded-full"
          >
            <View className="flex-row items-center gap-3">
              <MaterialIcons 
                name={isBalanced ? "check-circle" : "error"} 
                size={24} 
                color={isBalanced ? "#006a34" : "#b31b25"} 
              />
              <Text className={`font-label font-bold ${
                isBalanced ? "text-on-primary-container" : "text-error"
              }`}>
                Distribution Total: {totalPct}%
              </Text>
            </View>
            <Text className={`text-[10px] font-label uppercase font-black tracking-widest ${
              isBalanced ? "text-primary" : "text-error"
            }`}>
              {isBalanced ? "Balanced" : "Invalid"}
            </Text>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Sticky Footer for Action */}
      <View 
        className={`absolute left-0 right-0 p-6 ${showFooter ? 'bottom-24 bg-surface/80' : 'bottom-0 bg-transparent items-end'}`}
        style={{ paddingBottom: Platform.OS === 'ios' ? (showFooter ? 40 : 40) : (showFooter ? 24 : 24) }}
      >
        <TouchableOpacity
          onPress={handleSave}
          disabled={!isBalanced}
          activeOpacity={0.8}
          className={`flex-row items-center justify-center gap-3 shadow-xl ${
            isBalanced ? "bg-primary" : "bg-surface-container-high"
          } ${showFooter ? 'w-full h-16 rounded-full' : 'w-20 h-20 rounded-full'}`}
          style={isBalanced ? styles.buttonShadow : {}}
        >
          {showFooter && (
            <Text className={`font-headline font-extrabold text-xl ${
              isBalanced ? "text-on-primary" : "text-on-surface-variant"
            }`}>
              Update Targets
            </Text>
          )}
          <MaterialIcons 
            name={showFooter ? "trending-up" : "check"} 
            size={showFooter ? 24 : 32} 
            color={isBalanced ? "#cdffd4" : "#595c5d"} 
          />
        </TouchableOpacity>
      </View>

      {/* Bottom Nav Placeholder */}
      {showFooter && (
        <View className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-surface-container pt-3 pb-8 px-8 flex-row justify-between items-center">
          <NavItem icon="home" label="Home" />
          <NavItem icon="menu-book" label="Diary" />
          <NavItem icon="monitoring" label="Progress" active />
          <NavItem icon="person" label="Profile" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
