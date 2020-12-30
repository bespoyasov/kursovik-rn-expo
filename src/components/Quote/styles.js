import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
    margin: "auto",
    marginTop: Dimensions.get("window").height / 6,
  },
  text: {
    fontFamily: "Georgia",
    fontStyle: "italic",
    fontSize: 26,
    lineHeight: 32,
    color: "white",
    position: "relative",
  },
  author: {
    fontFamily: "Georgia",
    fontStyle: "italic",
    fontSize: 15,
    lineHeight: 32,
    color: "white",
  },
  link: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: "rgba(255,255,255,0.5)",
  },
});
