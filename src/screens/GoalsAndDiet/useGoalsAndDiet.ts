import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export type Goal = "lose" | "maintain" | "gain";
export type Diet = "veg" | "non-veg" | "vegan" | "jain";
export type ActivityLevel = 0 | 1 | 2; // 0: Sedentary, 1: Active, 2: Athlete

export const useGoalsAndDiet = () => {
  const [goal, setGoal] = useState<Goal>("maintain");
  const [diet, setDiet] = useState<Diet>("non-veg");
  const [activity, setActivity] = useState<ActivityLevel>(1);
  const navigation = useNavigation<any>();

  const handleGoalSelect = (selectedGoal: Goal) => {
    setGoal(selectedGoal);
  };

  const handleDietSelect = (selectedDiet: Diet) => {
    setDiet(selectedDiet);
  };

  const handleActivityChange = (level: ActivityLevel) => {
    setActivity(level);
  };

  const handleCalculatePlan = () => {
    console.log("Calculating plan for:", { goal, diet, activity });
    navigation.navigate('CalorieReveal');
  };

  return {
    goal,
    diet,
    activity,
    handleGoalSelect,
    handleDietSelect,
    handleActivityChange,
    handleCalculatePlan,
  };
};
