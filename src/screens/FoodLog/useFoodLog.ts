import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

export const useFoodLog = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [searchQuery, setSearchQuery] = useState("");
  const [foods, setFoods] = useState([
    {
      id: "1",
      name: "Oatmeal with Berries",
      calories: 154,
      unit: "100g",
      icon: "restaurant",
      added: true,
      quantity: 1.0,
      portion: "Bowl (250g)",
    },
    {
      id: "2",
      name: "Boiled Egg",
      calories: 78,
      unit: "piece",
      icon: "egg",
      added: true,
      quantity: 2,
      portion: "Pieces",
    },
    {
      id: "3",
      name: "Black Coffee",
      calories: 2,
      unit: "cup",
      icon: "coffee",
      added: false,
    },
  ]);
  
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  const toggleFood = (id: string) => {
    setFoods((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              added: !f.added,
              quantity: !f.added ? (f.quantity || 1) : f.quantity,
              portion: !f.added ? (f.portion || "Serving") : f.portion,
            }
          : f
      )
    );
  };

  const updateQuantity = (id: string, delta: number) => {
    setFoods((prev) =>
      prev.map((f) =>
        f.id === id
          ? { ...f, quantity: Math.max(0.5, (f.quantity || 1) + delta) }
          : f
      )
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  const logMeal = () => {
    navigation.navigate("Home");
  };

  return {
    selectedMeal,
    setSelectedMeal,
    mealTypes,
    searchQuery,
    setSearchQuery,
    recentFoods: foods,
    toggleFood,
    updateQuantity,
    goBack,
    logMeal,
  };
};
