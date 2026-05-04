import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function useBodyMetrics() {
  const [gender, setGender] = useState<"male" | "female" | "other">("female");
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(64.5);
  const [height, setHeight] = useState(168);
  const navigation = useNavigation<any>();

  const handleGenderSelect = (selectedGender: "male" | "female" | "other") => {
    setGender(selectedGender);
  };

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
  };

  const handleWeightChange = (increment: number) => {
    const newWeight = Math.max(0, weight + increment);
    setWeight(Math.round(newWeight * 10) / 10);
  };

  const handleHeightChange = (increment: number) => {
    const newHeight = Math.max(0, height + increment);
    setHeight(newHeight);
  };

  const handleContinue = () => {
    navigation.navigate('GoalDiet');
  };

  return {
    gender,
    age,
    weight,
    height,
    handleGenderSelect,
    handleAgeChange,
    handleWeightChange,
    handleHeightChange,
    handleContinue,
  };
}