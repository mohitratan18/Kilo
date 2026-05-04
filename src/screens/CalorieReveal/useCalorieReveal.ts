import { useMemo } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

export const useCalorieReveal = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  // Default values if params are missing (for dev/preview)
  const {
    gender = "female",
    age = 28,
    weight = 64.5,
    height = 168,
    goal = "maintain",
    activity = 1,
  } = route.params || {};

  const plan = useMemo(() => {
    // BMR Calculation (Mifflin-St Jeor)
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === "male" ? bmr + 5 : bmr - 161;

    // TDEE Calculation
    const activityMultipliers = [1.2, 1.55, 1.725];
    const tdee = bmr * activityMultipliers[activity];

    // Goal Adjustment
    let targetCalories = Math.round(tdee);
    if (goal === "lose") targetCalories -= 500;
    if (goal === "gain") targetCalories += 500;

    // Macro Targets (Standard 30% P, 40% C, 30% F)
    const protein = Math.round((targetCalories * 0.3) / 4);
    const carbs = Math.round((targetCalories * 0.4) / 4);
    const fat = Math.round((targetCalories * 0.3) / 9);

    return {
      calories: targetCalories,
      macros: { protein, carbs, fat },
    };
  }, [gender, age, weight, height, goal, activity]);

  const handleGetStarted = () => {
    navigation.navigate("Home");
  };

  const handleEditPlan = () => {
    navigation.navigate("EditPlan");
  };

  return {
    plan,
    handleGetStarted,
    handleEditPlan,
  };
};
