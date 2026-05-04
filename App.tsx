import 'react-native-reanimated';
import "./globals.css";
import React from "react";
import { LogBox, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Ignore specific warnings if needed
LogBox.ignoreLogs(['SafeAreaView has been deprecated']);

// Enhanced error logging
if (typeof ErrorUtils !== 'undefined' && __DEV__) {
  const defaultHandler = ErrorUtils.getGlobalHandler();
  ErrorUtils.setGlobalHandler((error, isFatal) => {
    console.log('--- ENHANCED ERROR LOG ---');
    console.log('Type:', error?.name || 'Error');
    console.log('Message:', error?.message || 'No message');
    if (error?.stack) console.log('Stack:', error.stack);
    console.log('-------------------------');
    if (defaultHandler) defaultHandler(error, isFatal);
  });
}

import Welcome from "./src/screens/Welcome/page";
import Home from "./src/screens/Home/page";
import Diary from "./src/screens/Diary/page";
import FoodLog from "./src/screens/FoodLog/page";
import Water from "./src/screens/Water/page";
import Progress from "./src/screens/Progress/page";
import Profile from "./src/screens/Profile/page";
import BodyMetrics from "./src/screens/BodyMetrics/page";
import CalorieReveal from "./src/screens/CalorieReveal/page";
import GoalsAndDietPage from "./src/screens/GoalsAndDiet/page";
import EditPlan from "./src/screens/EditPlan/page";
import { Footer } from "./src/components/Footer";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Diary: undefined;
  FoodLog: undefined;
  Water: undefined;
  Progress: undefined;
  Profile: undefined;
  BodyMetrics: undefined;
  CalorieReveal: undefined;
  GoalDiet: undefined;
  EditPlan: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavigationWrapper({ currentRoute }: { currentRoute: string | undefined }) {
  const navigation = useNavigation<any>();
  
  const mainScreens = ["Home", "Diary", "Progress"];
  const showFooter = mainScreens.includes(currentRoute || "");

  return (
    <View className="flex-1">
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="FoodLog" component={FoodLog} />
        <Stack.Screen name="Water" component={Water} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BodyMetrics" component={BodyMetrics} />
        <Stack.Screen name="CalorieReveal" component={CalorieReveal} />
        <Stack.Screen name="GoalDiet" component={GoalsAndDietPage} />
        <Stack.Screen name="EditPlan" component={EditPlan} />
      </Stack.Navigator>
      {showFooter && <Footer navigation={navigation} currentRoute={currentRoute} />}
    </View>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = React.useState<string | undefined>("Welcome");

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (state) {
          const route = state.routes[state.index]?.name;
          setCurrentRoute(route);
        }
      }}
    >
      <StatusBar style="auto" />
      <NavigationWrapper currentRoute={currentRoute} />
    </NavigationContainer>
  );
}
