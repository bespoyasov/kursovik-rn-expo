import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectAppState } from "../../store";
import { Link } from "../Link";
import { styles } from "./styles";

export const Quote = () => {
  const { quote } = useSelector(selectAppState);
  const { author, text } = quote;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.author}>
        —{" "}
        <Link href="https://varlamov.ru/1227706.html" style={styles.link}>
          {author}
        </Link>
      </Text>
    </View>
  );
};
