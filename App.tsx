import "./globals.css";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}