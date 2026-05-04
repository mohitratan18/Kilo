import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

export function useHome() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToFoodLog = () => navigation.navigate("FoodLog");
  const navigateToWater = () => navigation.navigate("Water");
  const navigateToEditPlan = () => navigation.navigate("EditPlan");

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return {
    navigateToFoodLog,
    navigateToWater,
    navigateToEditPlan,
    currentDate,
  };
}
