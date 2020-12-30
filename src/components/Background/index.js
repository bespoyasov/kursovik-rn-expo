import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export const Background = ({ children }) => {
  return (
    <LinearGradient colors={["#254b6e", "#70b0e0"]} style={styles.container}>
      {children}
    </LinearGradient>
  );
};
