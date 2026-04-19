import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

export function useWelcome() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleContinueWithGoogle = () => {
    navigation.navigate("BodyMetrics");
  };

  const handleContinueWithPhone = () => {
    navigation.navigate("BodyMetrics");
  };

  return {
    handleContinueWithGoogle,
    handleContinueWithPhone,
  };
}