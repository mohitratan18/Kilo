import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

export const useProgress = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToFoodLog = () => navigation.navigate("FoodLog");

  return {
    navigateToFoodLog,
  };
};
