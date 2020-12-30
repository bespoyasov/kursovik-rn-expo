import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import { WithRefresh } from "../../components/WithRefresh";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Quote } from "../../components/Quote";
import { styles } from "./styles";

export const MainScreen = () => {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <WithRefresh>
          <Header />
          <Quote />
        </WithRefresh>
      </SafeAreaView>
    </Background>
  );
};
