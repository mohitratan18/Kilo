import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  activeOpacity?: number;
}

export function Button({ title, onPress, variant = "primary", activeOpacity = 0.8 }: ButtonProps) {
  const buttonStyle = variant === "primary" ? styles.primaryButton : styles.secondaryButton;
  const textStyle = variant === "primary" ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    width: "100%",
    height: 64,
    backgroundColor: "#006a34",
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  } as ViewStyle,
  secondaryButton: {
    width: "100%",
    height: 64,
    backgroundColor: "#e0e3e4",
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  } as ViewStyle,
  primaryText: {
    fontFamily: "Manrope",
    fontSize: 18,
    fontWeight: "700",
    color: "#cdffd4",
  } as TextStyle,
  secondaryText: {
    fontFamily: "Manrope",
    fontSize: 18,
    fontWeight: "700",
    color: "#2c2f30",
  } as TextStyle,
});