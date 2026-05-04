import { useState, useMemo, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const useEditPlan = () => {
  const navigation = useNavigation<any>();
  
  // Initial values from HTML
  const [calories, setCalories] = useState(2450);
  const [proteinPct, setProteinPct] = useState(30);
  const [carbsPct, setCarbsPct] = useState(45);
  const [fatPct, setFatPct] = useState(25);

  const macros = useMemo(() => {
    // 1g Protein = 4 kcal
    // 1g Carbs = 4 kcal
    // 1g Fat = 9 kcal
    
    const pKcal = (calories * proteinPct) / 100;
    const cKcal = (calories * carbsPct) / 100;
    const fKcal = (calories * fatPct) / 100;
    
    return {
      protein: {
        pct: proteinPct,
        grams: Math.round(pKcal / 4),
        kcal: Math.round(pKcal),
      },
      carbs: {
        pct: carbsPct,
        grams: Math.round(cKcal / 4),
        kcal: Math.round(cKcal),
      },
      fat: {
        pct: fatPct,
        grams: Math.round(fKcal / 9),
        kcal: Math.round(fKcal),
      },
    };
  }, [calories, proteinPct, carbsPct, fatPct]);

  const totalPct = proteinPct + carbsPct + fatPct;
  const isBalanced = totalPct === 100;

  const handleUpdateCalories = (val: string) => {
    const num = parseInt(val.replace(/[^0-9]/g, "")) || 0;
    setCalories(num);
  };

  const handleUpdateProtein = (val: number) => {
    setProteinPct(val);
  };

  const handleUpdateCarbs = (val: number) => {
    setCarbsPct(val);
  };

  const handleUpdateFat = (val: number) => {
    setFatPct(val);
  };

  const handleSave = () => {
    if (!isBalanced) return;
    console.log("Saving new targets:", { calories, proteinPct, carbsPct, fatPct });
    navigation.goBack();
  };

  return {
    calories,
    macros,
    totalPct,
    isBalanced,
    handleUpdateCalories,
    handleUpdateProtein,
    handleUpdateCarbs,
    handleUpdateFat,
    handleSave,
  };
};
